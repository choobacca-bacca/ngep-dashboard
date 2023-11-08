import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import type { IData, IDateData } from "./types";

import logo from './logo.svg';
import './App.css';
import AboutNGEP from './pages/AboutNGEP';
import Metrics from './pages/Metrics';
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Goals from './pages/Goals';

function App() {

  const DATA_COLLECTION_DATES: string[] = [
    "13th Oct 2023",
    "29th Sep 2023",
    "15th Sep 2023",
  ]

  return (
      <Router> 
        <div className="App">
          <Navbar />
            
        <Routes> 
                <Route path='/' element={< Home />}></Route>
                <Route path='/about' element={< AboutNGEP />}></Route>
                <Route path='/goals' element={< Goals />}></Route>
                <Route path='/metrics' element={< Metrics />}></Route>
        </Routes> 
        </div> 
    </Router>
  );
}

export default App;
