// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyButtonComponent from './components/MyButtonComponent';
import MainPage from './components/MainPage';

function LandingPage() {
  return (
    <div>
      <h2>Game made by Nicholas Eto! I have created a game that will teach financial literacy to children through learning modules and interactive games!</h2>
      <MyButtonComponent />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Fintle</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/new-page" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
