import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import JobForm from './components/JobForm';

function App() {
  // const [isJobFormVisible, setJobFormVisible] = useState(false);

  // const toggleJobForm = () => {
  //   setJobFormVisible((prev) => !prev);
  // };

  // const closeJobForm = () => {
  //   setJobFormVisible(false);
  // };

  return (
    <Router>
      {/* <div className=" bg-gray-50 font-satoshi"> */}
        {/* <Navbar onJobsClick={toggleJobForm} /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/jobs/new" element={<JobForm />} />
        </Routes>

        {/* JobForm Modal
        {isJobFormVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeJobForm} // Close modal on outside click
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <JobForm onSuccess={closeJobForm} />
            </div>
          </div>
        )} */}
      {/* </div> */}
    </Router>
    // <JobForm />
  );
}

export default App;

