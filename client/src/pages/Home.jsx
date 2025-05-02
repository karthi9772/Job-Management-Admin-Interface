import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import { getJobs } from '../api/api.js';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (filters = {}) => {
    setLoading(true);
    const data = await getJobs(filters);
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Filter Bar */}
      <FilterBar onFilter={fetchJobs} />

      {/* Job List */}
      <div className="mt-6 space-y-4">
        {loading ? (
          <p className="text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-gray-500">No jobs found.</p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default Home;
