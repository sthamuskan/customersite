import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Stores from "./pages/Stores";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails"; 
import Orders from "./pages/Orders"; // 

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ */}
        <Route path="/orders" element={<Orders />} /> {/* ✅ */}
      </Routes>

      <Footer />
    </Router>
  );
}
