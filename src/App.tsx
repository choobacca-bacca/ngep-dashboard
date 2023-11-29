
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import AboutNGEP from './pages/AboutNGEP';
import Metrics from './pages/Metrics';
import Home from './pages/Home'
import Goals from './pages/Goals';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-37EY8P3ZJJ');

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
