import { Routes, Route } from 'react-router-dom';
import Products from './Products.jsx';
import Login from 'pages/Login.tsx';
import Register from 'pages/Register.tsx';
import Opinions from 'pages/opinions/Opinions.jsx';
import Order from 'pages/order/Order.jsx';
import ThankYouPage from 'pages/ThankYouPage.tsx';
import UserPanel from 'pages/userPanel/UserPanel.jsx';
import MyDetails from 'pages/userPanel/MyDetails.jsx';
import History from 'pages/userPanel/History.jsx';
import ChangePassword from 'pages/userPanel/ChangePassword.jsx';
import Newsletter from 'pages/userPanel/Newsletter/Newsletter.jsx';
import RemoveAccount from 'pages/userPanel/RemoveAccount.jsx';
import Avatars from 'pages/userPanel/Avatars/Avatars.jsx';
import NotFound from 'pages/NotFound.jsx';

const AppRouter = () => (
  <div className="main">
    <Routes>
      <Route path="/" element={<Products arePromoted />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
