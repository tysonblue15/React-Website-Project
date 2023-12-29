
import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom'
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>  
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/sign-up' exact Component={SignUp}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
