const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const jobsRoute = require('./routes/jobs');

dotenv.config();

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Routes
app.use('/api/jobs', jobsRoute);

// Vercel handler export
module.exports.handler = serverless(app);


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
