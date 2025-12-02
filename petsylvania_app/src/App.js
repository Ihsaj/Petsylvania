import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Add your other routes here */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;