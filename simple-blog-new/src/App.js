import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import BlogList from './component/BlogList';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <header className="banner">
                <h1>Welcome to My Simple Blog</h1>
              </header>
              <main className="main-content">
                <BlogList />
              </main>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <p>&copy; 2024 My Blog. All rights reserved. By Zainab </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;









