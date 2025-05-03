const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jobsRoute = require('./routes/jobs');

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'https://job-management-admin-interface-9ras.vercel.app',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
