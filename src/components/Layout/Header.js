import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Assets/LOGO1.png'

const Header = () => {
  return (
    <div className="header alk-sanet">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="navigation">
        <Link to="/aboutus" className="nav-link">
          ჩვენს შესახებ
        </Link>
        <Link to="/contact" className="nav-link">
          კონტაქტი
        </Link>
      </div>
    </div>
  );
};

export default Header;
