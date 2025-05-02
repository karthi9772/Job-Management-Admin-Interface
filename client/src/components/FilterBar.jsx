import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const jobTypes = ['Fulltime', 'Part-time', 'Contract', 'Internship'];

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    jobType: '',
    salaryRange: [0, 2000000], // Min and Max salary
  });

  const handleChange = (name, value) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
  };

  const handleFilterUpdate = (name, value) => {
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilter(updated); // Trigger the filter update only after the mouse is released
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-wrap gap-6 font-satoshi">
      {/* Job Title */}
      <div className="flex flex-col w-[200px]">
        <label className="text-sm text-[#4B5563] font-medium mb-1">Job Title</label>
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="e.g. UI/UX Designer"
          className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] placeholder-[#9CA3AF] outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Location */}
      <div className="flex flex-col w-[200px]">
        <label className="text-sm text-[#4B5563] font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="e.g. Bangalore"
          className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] placeholder-[#9CA3AF] outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Job Type */}
      <div className="flex flex-col w-[180px]">
        <label className="text-sm text-[#4B5563] font-medium mb-1">Job Type</label>
        <select
          name="jobType"
          value={filters.jobType}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#111827] outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Select</option>
          {jobTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      {/* Salary Range (Double Slider) */}
      <div className="flex flex-col w-[260px]">
        <label className="text-sm text-[#4B5563] font-medium mb-1">Salary Range (₹)</label>
        <div className="mt-2">
          <Slider
            range
            min={0}
            max={2000000}
            step={10000}
            value={filters.salaryRange}
            onChange={(value) => handleChange('salaryRange', value)} // Update state while dragging
            onAfterChange={(value) => handleFilterUpdate('salaryRange', value)} // Trigger filter update only after mouse release
            trackStyle={[{ backgroundColor: 'black' }]}
            handleStyle={[
              { borderColor: 'black', backgroundColor: 'white' },
              { borderColor: 'black', backgroundColor: 'white' },
            ]}
          />
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>₹{Number(filters.salaryRange[0]).toLocaleString()}</span>
            <span>₹{Number(filters.salaryRange[1]).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
