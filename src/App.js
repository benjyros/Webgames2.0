import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Speedclicker from './components/Speedclicker';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/speedclicker' element={<Speedclicker />} />
      </Routes>
    </div>
  );
}

export default App;
