import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import CompareProducts from './pages/CompareProducts';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ShoppingPolicy from './pages/ShoppingPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckoutInformation from './pages/CheckoutInformation';
import CheckoutLayout from './components/CheckoutLayout';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/my-profile" element={<Profile />} />
          <Route path='about' element={<About />} />
          <Route path='our-store' element={<OurStore />} />
          <Route path='our-store/:id' element={<SingleProduct />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='cart' element={<Cart />} />
          <Route path="my-orders" element={<Orders/>} />
          <Route path='checkout' element={<CheckoutLayout />}>
            <Route index element={<CheckoutInformation/>}/>
          </Route>
          <Route path='compare-products' element={<CompareProducts />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password/:token' element={<ResetPassword />} />
          <Route path='shopping-policy' element={<ShoppingPolicy />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms-and-conditions' element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
