const express = require('express');
const { Pool } = require('pg');
const pool = require('../db'); // import the pool

require('dotenv').config();

const router = express.Router();

// Create a PostgreSQL pool using the transaction pooler URL

// GET: All Jobs with optional filters
router.get('/', async (req, res) => {
  const { title, location, jobType, minSalary, maxSalary } = req.query;

  let conditions = [];
  let values = [];

  if (title) {
    conditions.push(`job_title ILIKE $${values.length + 1}`);
    values.push(`%${title}%`);
  }
  if (location) {
    conditions.push(`location ILIKE $${values.length + 1}`);
    values.push(`%${location}%`);
  }
  if (jobType) {
    conditions.push(`job_type = $${values.length + 1}`);
    values.push(jobType);
  }

  if (minSalary) {
    conditions.push(`salary_max >= $${values.length + 1}`);
    values.push(parseInt(minSalary));
  }
  if (maxSalary) {
    conditions.push(`salary_min <= $${values.length + 1}`);
    values.push(parseInt(maxSalary));
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';
  const query = `SELECT * FROM jobs ${whereClause}`;

  try {
    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database query failed' });
  }
});

// POST: Create a new Job
router.post('/', async (req, res) => {
  const jobData = req.body;

  const fields = Object.keys(jobData);
  const values = Object.values(jobData);

  const placeholders = fields.map((_, i) => `$${i + 1}`).join(', ');

  const query = `
    INSERT INTO jobs (${fields.join(', ')})
    VALUES (${placeholders})
    RETURNING *;
  `;

  try {
    const { rows } = await pool.query(query, values);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Insert error:', error);
    res.status(500).json({ error: 'Failed to insert job' });
  }
});


module.exports = router;
