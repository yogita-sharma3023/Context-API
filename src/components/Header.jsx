import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ContextUser from "../utils/UserContextData";
import UserOnlineStatus from "../utils/UseOnlineStatus";

const Header = () => {
  const { contextName } = useContext(ContextUser);

  const status = UserOnlineStatus();
  console.log(status);
  return (
    <div className="header">
      <nav className="navbar">
        {status ? "💚" : "❤️"}
        <Link className="nav-link" to="/">
          Home
        </Link>
        <span className="separator">|</span>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <span className="separator">|</span>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <span className="separator">|</span>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <span style={{ color: "red" }}>{contextName}</span>
      </nav>
    </div>
  );
};

export default Header;
