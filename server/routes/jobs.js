const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();


const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// GET: All Jobs with optional filters
router.get('/', async (req, res) => {
  const { title, location, jobType, minSalary, maxSalary } = req.query;

  let query = supabase.from('jobs').select('*');

  if (title) query = query.ilike('job_title', `%${title}%`);
  if (location) query = query.ilike('location', `%${location}%`);
  if (jobType) query = query.eq('job_type', jobType);

  if (minSalary && maxSalary) {
    query = query
      .gte('salary_max', parseInt(minSalary)) // job must offer at least what user wants
      .lte('salary_min', parseInt(maxSalary)); // job must not start beyond user's max
  } else if (minSalary) {
    query = query.gte('salary_max', parseInt(minSalary));
  } else if (maxSalary) {
    query = query.lte('salary_min', parseInt(maxSalary));
  }

  const { data, error } = await query;

  if (error) return res.status(500).json({ error });
  res.json(data);
});

// POST: Create a new Job
router.post('/', async (req, res) => {
  const jobData = req.body;

  const { data, error } = await supabase.from('jobs').insert([jobData]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

module.exports = router;
