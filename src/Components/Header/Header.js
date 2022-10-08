import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
// import { useAuth } from "../Login/useAuth";

const Header = () => {
  // const auth = useAuth();
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders </Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {/* {auth.user && (
          <span style={{ color: "yellow" }}>Welcome {auth.user.name}</span>
        )}
        {auth.user ? (
          <a href="/login">Sign out</a>
        ) : (
          <a href="/login">Sign in</a>
        )} */}
      </nav>
    </div>
  );
};

export default Header;
