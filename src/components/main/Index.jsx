import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Index.jsx';
import Login from './Login/Index.jsx';

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);

export default Main;
