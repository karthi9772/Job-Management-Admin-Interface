// import { useState } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

// const jobTypes = ['Fulltime', 'Part-time', 'Contract', 'Internship'];

// const FilterBar = ({ onFilter }) => {
//   const [filters, setFilters] = useState({
//     title: '',
//     location: '',
//     jobType: '',
//     salaryRange: [0, 2000000], 
//   });

//   const handleChange = (name, value) => {
//     const updated = { ...filters, [name]: value };
//     setFilters(updated);
//     onFilter(updated); // Trigger the filter update
//   };

//   const handleFilterUpdate = (name, value) => {
//     const updated = { ...filters, [name]: value };
//     setFilters(updated);
//     onFilter(updated); 
//   };

//   return (
//     <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-wrap gap-6 font-[satoshi] font-weight-500 text-md">
//       {/* Job Title */}
//       <div className="flex flex-col w-[200px]">
//         <label className="text-sm text-[#4B5563] font-medium mb-1">Job Title</label>
//         <input
//           type="text"
//           name="title"
//           value={filters.title}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           placeholder="e.g. UI/UX Designer"
//           className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] placeholder-[#9CA3AF] outline-none focus:ring-2 focus:ring-black"
//         />
//       </div>

//       {/* Location */}
//       <div className="flex flex-col w-[200px]">
//         <label className="text-sm text-[#4B5563] font-medium mb-1">Location</label>
//         <input
//           type="text"
//           name="location"
//           value={filters.location}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           placeholder="e.g. Bangalore"
//           className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] placeholder-[#9CA3AF] outline-none focus:ring-2 focus:ring-black"
//         />
//       </div>

//       {/* Job Type */}
//       <div className="flex flex-col w-[180px]">
//         <label className="text-sm text-[#4B5563] font-medium mb-1">Job Type</label>
//         <select
//           name="jobType"
//           value={filters.jobType}
//           onChange={(e) => handleChange(e.target.name, e.target.value)}
//           className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] outline-none focus:ring-2 focus:ring-black"
//         >
//           <option value="">Select</option>
//           {jobTypes.map((type) => (
//             <option key={type} value={type}>{type}</option>
//           ))}
//         </select>
//       </div>
      
//       {/* Salary Range (Double Slider) */}
//       <div className="flex flex-col w-[260px]">
//         <label className="text-sm text-[#4B5563] font-medium mb-1">Salary Range (₹)</label>
//         <div className="mt-2">
//           <Slider
//             range
//             min={0}
//             max={2000000}
//             step={10000}
//             value={filters.salaryRange}
//             onChange={(value) => setFilters({ ...filters, salaryRange: value })} // Update state while dragging
//             onChangeComplete={(value) => handleFilterUpdate('salaryRange', value)} // Trigger filter update only after mouse release
//             trackStyle={[{ backgroundColor: 'black' }]}
//             handleStyle={[
//               { borderColor: 'black', backgroundColor: 'white' },
//               { borderColor: 'black', backgroundColor: 'white' },
//             ]}
//           />
//           <div className="flex justify-between text-xs text-gray-600 mt-2">
//             <span>₹{Number(filters.salaryRange[0]).toLocaleString()}</span>
//             <span>₹{Number(filters.salaryRange[1]).toLocaleString()}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;

import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FiSearch, FiMapPin, FiUser } from 'react-icons/fi';

const jobTypes = ['Fulltime', 'Part-time', 'Contract', 'Internship'];

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    jobType: '',
    salaryRange: [70000, 100000], // ₹50k - ₹80k
  });

  const handleChange = (name, value) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilter(updated);
  };

  const handleFilterUpdate = (name, value) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between gap-6 overflow-x-auto">
      {/* Job Title */}
      <div className="flex items-center justify-between gap-2 min-w-[220px] border-r pr-4">
        <FiSearch className="text-gray-500 text-xl" />
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="Search By Job Title, Role"
          className="w-full text-sm placeholder-gray-400 text-gray-900 outline-none"
        />
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 min-w-[180px] border-r pr-4">
        <FiMapPin className="text-gray-500 text-xl" />
        <input
          name="location"
          value={filters.location}
          placeholder='Preferred Location'
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full text-sm placeholder-gray-400 text-gray-900 outline-none"
        />

      </div>

      {/* Job Type */}
      <div className="flex items-center gap-2 min-w-[160px] border-r pr-4">
        <FiUser className="text-gray-500 text-xl" />
        <select
          name="jobType"
          value={filters.jobType}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full text-sm text-gray-900 outline-none bg-transparent"
        >
          <option value="">Job type</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Salary Range */}
      <div className="flex flex-col min-w-[220px] font-extrabold text-black">
        <div className="flex justify-between text-xs text-gray-600 mt-1">
        <label className="text-sm text-gray-700 font-medium mb-1">Salary Per Month</label>
          <div>
          <span>₹{(filters.salaryRange[0] / 1000).toFixed(0)}k</span>
          <span className="mx-2">-</span>
          <span>₹{(filters.salaryRange[1] / 1000).toFixed(0)}k</span>
          </div>
        </div>
        <Slider
          range
          min={0}
          max={200000}
          step={1000}
          value={filters.salaryRange}
          onChange={(value) => setFilters({ ...filters, salaryRange: value })}
          onChangeComplete={(value) => handleFilterUpdate('salaryRange', value)}
          trackStyle={[{ backgroundColor: 'black' }]}
          handleStyle={[
            { borderColor: 'black', backgroundColor: 'white' },
            { borderColor: 'black', backgroundColor: 'white' },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterBar;
