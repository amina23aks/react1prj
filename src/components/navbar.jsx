/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">TimeLux</Link>
      </div>
      <div className="navbar-links">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favorite" className="favorite-link">Favorite</Link>
        <Link to="/cart">
          
          <ShoppingCart size={32} />
        </Link>
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/singin" className="login-link">singin</Link> {/* New login link */}
      </div>
    </div>
  );
};
