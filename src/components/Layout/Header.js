import React, { useState, useEffect } from "react";
import logo from "../../Assets/LOGO1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [handleHamburgerMenu, setHandleHamburgerMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

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

  const handleMainClick = () => {
    if (pathname === "/aboutus" || pathname==="/vehicles") {
      navigate("/");
    } else {
      console.log("Smooth scrolling to main");
    }
    setHandleHamburgerMenu(false);
  };

  const handleMenuClose = () => {
    if (pathname === "/aboutus") {
      navigate("/");
    } else {
      console.log("Smooth scrolling to main");
    }
    setHandleHamburgerMenu(false);
  };

  return (
    <div className={`header ${scrollPosition > 0 ? "yellow-bg" : ""}`}>
      <ScrollLink to="/" className="logo">
        <img src={logo} alt="" />
      </ScrollLink>
      <div className="navigation">
        <ScrollLink to={(pathname === "/aboutus" || pathname === "/vehicles" ) ? "/" : "background_image_container"} className="nav-link" onClick={handleMainClick}>
          მთავარი
        </ScrollLink>
        {(pathname !== "/aboutus" && pathname !=="/vehicles" ) && (
          <>
            <ScrollLink to="Frequent_questions" className="nav-link">
              ხშირად დასმული კითხვები
            </ScrollLink>
            <ScrollLink to="contact" className="nav-link">
              კონტაქტი
            </ScrollLink>
          </>
        )}

        <RouterLink to="/aboutus" className="nav-link">
          ჩვენს შესახებ
        </RouterLink>
      </div>
      <RxHamburgerMenu className="header_icon" onClick={() => setHandleHamburgerMenu(true)} />
      {handleHamburgerMenu && (
        <div className="resaponsiver_menu_overlay">
          <ScrollLink onClick={handleMenuClose} to={pathname === "/aboutus" ? "/" : "background_image_container"} className="nav-link">
            მთავარი
          </ScrollLink>

          {pathname !== "/aboutus" && <>
            <ScrollLink onClick={handleMenuClose} to="Frequent_questions" className="nav-link">
              ხშირად დასმული კითხვები
            </ScrollLink>{" "}
            <ScrollLink onClick={handleMenuClose} to="contact" className="nav-link">
              კონტაქტი
            </ScrollLink>
          </>}
          
          <ScrollLink onClick={handleMenuClose} to="about_us" className="nav-link">
            ჩვენს შესახებ
          </ScrollLink>
          <IoMdClose className="header_icon" onClick={handleMenuClose} />
        </div>
      )}
    </div>
  );
};

export default Header;
