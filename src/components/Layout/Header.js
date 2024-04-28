import React, { useState, useEffect } from "react";
import logo from "../../Assets/LOGO1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { SiJsonwebtokens } from "react-icons/si";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [handleHamburgerMenu, setHandleHamburgerMenu] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {

    const fav = localStorage.getItem("ravisaxeli")

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
    if (pathname === "/heavyequipment" || pathname === "/vehicles") {
      navigate("/");
    } else {
      console.log("Smooth scrolling to main");
    }
    setHandleHamburgerMenu(false);
  };

  const handleMenuClose = () => {
    if (pathname === "/heavyequipment" || pathname === "/vehicles") {
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
        <ScrollLink to={pathname === "/heavyequipment" || pathname === "/vehicles" ? "/" : "background_image_container"} className="nav-link" onClick={handleMainClick}>
          მთავარი
        </ScrollLink>
        {pathname !== "/heavyequipment" && pathname !== "/vehicles" && (
          <>
            {" "}
            <ScrollLink to="videos" className="nav-link">
              ვიდეოები
            </ScrollLink>
            <ScrollLink to="Frequent_questions" className="nav-link">
              ხშირად დასმული კითხვები
            </ScrollLink>{" "}
            <ScrollLink to="about_us" className="nav-link">
              ჩვენს შესახებ
            </ScrollLink>
            <ScrollLink to="contact" className="nav-link">
              კონტაქტი
            </ScrollLink>{" "}
          </>
        )}
      </div>
      <RxHamburgerMenu className="header_icon" onClick={() => setHandleHamburgerMenu(true)} />
      {handleHamburgerMenu && (
        <div className="resaponsiver_menu_overlay">
          <ScrollLink onClick={handleMenuClose} to={pathname === "/aboutus" || pathname === "/vehicles" ? "/" : "background_image_container"} className="nav-link">
            მთავარი
          </ScrollLink>

          {pathname !== "/heavyequipment" && pathname !== "/vehicles" && (
            <>
              {" "}
              <ScrollLink to="videos" className="nav-link">
                ვიდეოები
              </ScrollLink>
              <ScrollLink onClick={handleMenuClose} to="Frequent_questions" className="nav-link">
                ხშირად დასმული კითხვები
              </ScrollLink>{" "}
              <ScrollLink onClick={handleMenuClose} to="about_us" className="nav-link">
                ჩვენს შესახებ
              </ScrollLink>{" "}
              <ScrollLink onClick={handleMenuClose} to="contact" className="nav-link">
                კონტაქტი
              </ScrollLink>{" "}
            </>
          )}

          <IoMdClose className="header_icon" onClick={handleMenuClose} />
        </div>
      )}
    </div>
  );
};

export default Header;
