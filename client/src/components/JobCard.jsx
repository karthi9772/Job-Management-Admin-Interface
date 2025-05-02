// import React from 'react';

// const JobCard = ({ job }) => {
//   return (
//     <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 w-full max-w-xl mx-auto">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
//           <p className="text-sm text-gray-500 mt-1">{job.company}</p>
//         </div>
//         <span
//           className={`text-xs font-medium px-3 py-1 rounded-full ${
//             job.type === 'Full-time'
//               ? 'bg-green-100 text-green-600'
//               : job.type === 'Internship'
//               ? 'bg-blue-100 text-blue-600'
//               : job.type === 'Part-time'
//               ? 'bg-yellow-100 text-yellow-600'
//               : 'bg-purple-100 text-purple-600'
//           }`}
//         >
//           {job.type}
//         </span>
//       </div>

//       <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
//         <div className="flex items-center gap-1">
//           <img src="/location-icon.svg" alt="Location" className="w-4 h-4" />
//           <span>{job.location}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <img src="/salary-icon.svg" alt="Salary" className="w-4 h-4" />
//           <span>{job.salary}</span>
//         </div>
//       </div>

//       <p className="text-sm text-gray-600 line-clamp-2 mb-5">{job.description}</p>

//       <div className="flex justify-end">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg shadow-sm transition duration-200">
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;


import React from "react";
import { Briefcase, LocateIcon, Clock, Wallet, Building2 } from "lucide-react";

const JobCard = ({job}) => {

  return (
    <div className="border rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
      {/* Top Section: Logo + Company Info */}
      
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img

            src={""}
            alt="company logo"
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{job.job_title}</h2>
            <p className="text-gray-600">{job.company_name}</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">24h ago</div>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {job.job_type}
        </span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
          1-3 yr Exp
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
          Onsite
        </span>
      </div>

      {/* Job Description */}
      <p className="text-gray-700 text-sm">
        {job.job_description.length > 100
          ? `${job.job_description.slice(0, 100)}...`
          : job.job_description}
      </p>

      {/* Icons Section */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <LocateIcon size={18} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>Fulltime</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet size={18} />
          <span>{`₹ ${job.salary_min} - ${job.salary_max}`}</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          <span>1-3 yr Exp</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
