import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateJob from './pages/CreateJob';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router >
       <div className="min-h-screen bg-gray-50 font-satoshi font-[Satoshi]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<Home />} />
          <Route path="/jobs/new" element={<CreateJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

