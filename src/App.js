import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TicTacToe from './components/TicTacToe';
import Hangman from './components/Hangman';
import Speedclicker from './components/Speedclicker';
import Reactionclicker from './components/Reactionclicker';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/tictactoe' element={<TicTacToe />} />
        <Route exact path='/hangman' element={<Hangman />} />
        <Route exact path='/speedclicker' element={<Speedclicker />} />
        <Route exact path='/reactionclicker' element={<Reactionclicker />} />
      </Routes>
    </div>
  );
}

export default App;
