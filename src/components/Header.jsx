import React, { useState, useRef, useEffect } from "react";
import "../components/Header.css";
import logo from "../assets/logo.png";
import profileImg from "../assets/Profile.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const profileRef = useRef(null);
  const cartRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="brand-name">SringarVastra</span>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* Notifications */}
        <div className="icon-wrapper">
          <span className="icon">🔔</span>
          <span className="badge">3</span>
        </div>

        {/* Cart */}
        <div className="icon-wrapper" ref={cartRef}>
          <span className="icon" onClick={() => setCartOpen(!cartOpen)}>
            🛒
          </span>
          <span className="badge">2</span>

          {cartOpen && (
            <div className="cart-dropdown">
              <p className="cart-title">My Cart</p>
              <div className="cart-item">Red Saree × 1</div>
              <div className="cart-item">Kurta Set × 1</div>

              <Link
                to="/checkout"
                className="checkout-btn"
                onClick={() => setCartOpen(false)}
              >
                Go to Checkout
              </Link>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="profile-wrapper" ref={profileRef}>
          <img
            src={profileImg}
            alt="profile"
            className="profile-pic"
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" onClick={() => setProfileOpen(false)}>
                My Profile
              </Link>
              <Link to="/orders" onClick={() => setProfileOpen(false)}>
                My Orders
              </Link>
              <hr />
              <button className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
