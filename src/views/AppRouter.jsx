import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './Products.jsx';
import Login from 'views/Login.jsx';
import Register from 'views/Register.jsx';
import About from 'views/about/About.jsx';
import Opinions from 'views/opinions/Opinions.jsx';
import Order from 'views/order/Order.jsx';
import ThankYouPage from 'views/ThankYouPage.jsx';
import UserPanel from 'views/userPanel/UserPanel.jsx';
import MyDetails from 'views/userPanel/MyDetails.jsx';
import History from 'views/userPanel/History.jsx';
import ChangePassword from 'views/userPanel/ChangePassword.jsx';
import Newsletter from 'views/userPanel/Newsletter/Newsletter.jsx';
import RemoveAccount from 'views/userPanel/RemoveAccount.jsx';
import Avatars from 'views/userPanel/Avatars/Avatars.jsx';
import NotFound from 'views/NotFound.jsx';

const AppRouter = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products arePromoted />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/opinions" element={<Opinions />} />
      <Route path="/order" element={<Order />} />
      <Route path="/thank-you-page" element={<ThankYouPage />} />
      <Route path="/user-panel" element={<UserPanel />}>
        <Route path="" element={<MyDetails />} />
        <Route path="data" element={<MyDetails />} />
        <Route path="history" element={<History />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="remove-account" element={<RemoveAccount />} />
        <Route path="avatars" element={<Avatars />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default AppRouter;
