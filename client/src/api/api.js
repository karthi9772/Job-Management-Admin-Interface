import axios from 'axios';

const API_BASE_URL = 'https://job-management-admin-interface-kvr7y2jfz-karthi-gs-projects.vercel.app';

// Fetch jobs with optional filters
export const getJobs = async (filters = {}) => {
  try {
    const response = await axios.get(API_BASE_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Create a new job
export const createJob = async (jobData) => {
  try {
    const response = await axios.post(API_BASE_URL, jobData);
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};
