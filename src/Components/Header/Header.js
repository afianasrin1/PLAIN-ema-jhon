import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
// import { useAuth } from "../Login/useAuth";

const Header = () => {
  // const auth = useAuth();
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
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
