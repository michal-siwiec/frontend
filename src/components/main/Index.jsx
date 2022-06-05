import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Index.jsx';
import Login from './login/Index.jsx';
import Register from './register/Index.jsx';

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>
);

export default Main;
