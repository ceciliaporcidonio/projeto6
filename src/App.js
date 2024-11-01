// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantProfile from './pages/RestaurantProfile';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
