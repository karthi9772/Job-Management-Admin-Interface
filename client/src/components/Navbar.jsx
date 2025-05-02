import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onJobsClick }) => {
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path ? 'text-black font-semibold' : 'text-[#6B7280]';

  return (
    <div className="py-4 font-weight-600 text-md">
      <nav className="w-[70%] max-w-[1200px] mx-auto border-b border-[#E5E7EB] bg-white px-8 py-4 rounded-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex justify-center w-1/7">
          <img
            src="/icons/company-logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
        </Link>

        {/* Navigation */}
        <div className="flex justify-evenly w-5/7 text-md font-weight-600 font-bold">
          <Link
            to="/"
            className={`${isActive('/')} hover:text-black transition duration-200`}
          >
            Home
          </Link>
          <button
            className="hover:text-black transition duration-200 text-[#6B7280]"
          >
            Jobs
          </button>
          <Link
            to="/find-talents"
            className={`${isActive('/find-talents')} hover:text-black transition duration-200`}
          >
            Find Talents
          </Link>
          <Link
            to="/about"
            className={`${isActive('/about')} hover:text-black transition duration-200`}
          >
            About Us
          </Link>
          <Link
            to="/testimonials"
            className={`${isActive('/testimonials')} hover:text-black transition duration-200`}
          >
            Testimonials
          </Link>
        </div>

        {/* Create Job CTA */}
        <div className="flex justify-center w-1/7">
          <button
            onClick={onJobsClick} // Toggle JobForm modal
            className="px-5 py-2.5 bg-gradient-to-t from-[#6100AD] to-[#A128FF] text-white text-md rounded-full font-medium hover:brightness-110 transition duration-200"
          >
            Create Jobs
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
