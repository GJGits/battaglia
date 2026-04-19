import React from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <GameBoard />
    </div>
  );
}