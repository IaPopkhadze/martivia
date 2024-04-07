import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../Assets/LOGO1.png";

const Header = () => {
  return (
    <div className="header alk-sanet">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="navigation">
        <Link to="background_image_container" className="nav-link">
          მთავარი
        </Link>
        <Link to="about_us" className="nav-link">
          ჩვენს შესახებ
        </Link>
        <Link to="Frequent_questions" className="nav-link">
          ხშირად დასმული კითხვები
        </Link>
        <Link to="contact" className="nav-link">
          კონტაქტი
        </Link>
      </div>
    </div>
  );
};

export default Header;
