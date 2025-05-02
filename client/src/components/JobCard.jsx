import { format } from 'date-fns';

const JobCard = ({ job }) => {
  return (
    <div className="border border-[#E5E7EB] bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-black mb-1">{job.job_title}</h2>
          <p className="text-sm text-gray-600">{job.company_name}</p>
        </div>
        <span className="text-sm font-medium text-white bg-black px-3 py-1.5 rounded-md capitalize">
          {job.job_type}
        </span>
      </div>

      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p><span className="font-medium text-gray-900">Location:</span> {job.location}</p>
        <p>
          <span className="font-medium text-gray-900">Salary:</span> ₹
          {job.salary_min.toLocaleString()} – ₹{job.salary_max.toLocaleString()}
        </p>
        <p>
          <span className="font-medium text-gray-900">Deadline:</span>{' '}
          {format(new Date(job.application_deadline), 'MMM dd, yyyy')}
        </p>
      </div>

      <p className="mt-4 text-sm text-gray-600 line-clamp-2">
        {job.job_description}
      </p>
    </div>
  );
};

export default JobCard;
