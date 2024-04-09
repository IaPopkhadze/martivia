import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../Assets/LOGO1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [handleHamburgerMenu, setHandleHamburgerMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrollPosition > 0 ? "yellow-bg" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <div className="navigation">
        <Link to="background_image_container" className="nav-link">
          მთავარი
        </Link>
        <Link to="Frequent_questions" className="nav-link">
          ხშირად დასმული კითხვები
        </Link>
        <Link to="about_us" className="nav-link">
          ჩვენს შესახებ
        </Link>
        <Link to="contact" className="nav-link">
          კონტაქტი
        </Link>
      </div>
      <RxHamburgerMenu className="header_icon" onClick={() => setHandleHamburgerMenu(true)} />
      {handleHamburgerMenu && (
        <div className="resaponsiver_menu_overlay">
          <Link onClick={() => setHandleHamburgerMenu(false)} to="background_image_container" className="nav-link">
            მთავარი
          </Link>
          <Link onClick={() => setHandleHamburgerMenu(false)} to="Frequent_questions" className="nav-link">
            ხშირად დასმული კითხვები
          </Link>{" "}
          <Link onClick={() => setHandleHamburgerMenu(false)} to="about_us" className="nav-link">
            ჩვენს შესახებ
          </Link>
          <Link onClick={() => setHandleHamburgerMenu(false)} to="contact" className="nav-link">
            კონტაქტი
          </Link>
          <IoMdClose className="header_icon" onClick={() => setHandleHamburgerMenu(false)} />
        </div>
      )}
    </div>
  );
};

export default Header;
