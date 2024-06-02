import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [showNavbar, setShowNavBar] = useState(true);

  const location = useLocation();


  useEffect(() =>{
    if(location.pathname === '/' || location.pathname === 'register'){
      setShowNavBar(false);
    }else {
      setShowNavBar(true);
    }
  }, [location.pathname]);

  
  return (
    <Router>
     {showNavbar  && <Navbar />} 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
