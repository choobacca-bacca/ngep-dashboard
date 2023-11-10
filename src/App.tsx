import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import type { IData, IDateData } from "./types";

import logo from './logo.svg';
import './App.css';
import AboutNGEP from './pages/AboutNGEP';
import Metrics from './pages/Metrics';
import Home from './pages/Home'
import Goals from './pages/Goals';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {

  return (
      <Router> 
        <div className="App">
          <ResponsiveAppBar />
            
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
