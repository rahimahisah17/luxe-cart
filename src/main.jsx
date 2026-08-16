import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'

import App from './App.jsx'
import Cart from './Cart.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Profile from './Profile.jsx'
import Orders from './Orders.jsx'
import Wishlist from './Wishlist.jsx'
import Checkout from './Checkout.jsx'
import Payment from './Payment.jsx'
import OrderSuccess from './OrderSuccess.jsx'
import Settings from './Settings.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import { CartProvider } from './context/CartContext.jsx'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />
            <Route path="/settings" element={<Settings />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
