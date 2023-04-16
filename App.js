import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        
          <Routes path='/' exact />
        
    </Router>
    </>
  );
}

export default App;
