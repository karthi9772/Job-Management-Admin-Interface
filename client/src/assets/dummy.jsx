import React from "react";

const JobCard = ({ job }) => {
  // Conditional rendering of company logo based on company name
  const getCompanyLogo = (companyName) => {
    switch (companyName.toLowerCase()) {
      case "amazon":
        return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";
      case "swiggy":
        return "https://upload.wikimedia.org/wikipedia/commons/9/9f/Swiggy_logo.svg";
      case "tesla":
        return "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png";
      default:
        return "https://via.placeholder.com/150"; // Default logo if company is not listed
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 relative border border-gray-200">
      {/* Posted Time */}
      <span className="absolute top-4 right-4 bg-[#EAF6FF] text-[#228BE6] text-sm font-medium px-3 py-1 rounded-full">
        24h Ago
      </span>

      {/* Company Logo */}
      <div className="w-12 h-12 mb-4">
        <img
          src={getCompanyLogo(job.company_name)}
          alt="Company Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h3>

      {/* Details */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-base">person</span>
          {job.experience || "1-3 yr Exp"}
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-base">location_on</span>
          {job.location || "Onsite"}
        </div>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-base">payments</span>
          {job.salary || "12LPA"}
        </div>
      </div>

      {/* Description */}
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style, and create personalized</li>
      </ul>

      {/* Apply Button */}
      <button className="w-full mt-auto bg-[#009EFF] hover:bg-[#007BDB] text-white font-medium py-2 rounded-lg transition">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
