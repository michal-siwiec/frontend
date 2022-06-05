import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Index.jsx';

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  </div>
);

export default Main;
