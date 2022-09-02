import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './products/Products.jsx';
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';
import About from './about/Index.jsx';
import Opinions from './opinions/Opinions.jsx';

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/opinions" element={<Opinions />} />
    </Routes>
  </div>
);

export default Main;
