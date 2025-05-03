const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jobsRoute = require('./routes/jobs');

dotenv.config();

const app = express();

// Configure CORS to allow access from all origins for every request
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Routes
app.use('/api/jobs', jobsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
