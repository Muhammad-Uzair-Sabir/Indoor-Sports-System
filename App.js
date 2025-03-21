import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import Header from './MyComponents/header';
import Home from './MyComponents/Home';
import About from './MyComponents/about';
import Dashboard from './MyComponents/dashboard';

function App() {
  return (
    <Router>
      {/* <Header title="Indoor Sports System" /> */}
      
      {}
      
      {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
