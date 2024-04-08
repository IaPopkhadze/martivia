import React from "react";
import map from "../Assets/googlemap.jpg";
import { MdLocationPin } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { useEffect } from "react";

import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaViber } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

const Contact = () => {

  useEffect(() => {
    const title = document.querySelector(".contact_title");
    const videoContainers = document.querySelectorAll(".map_container");
    const contactInfo = document.querySelector(".contact_info");

    function movingContainer() {
      const triggerBottom = (window.innerHeight / 4.4) * 4;
      videoContainers.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
      const titleTop = title.getBoundingClientRect().top;
      if (titleTop < triggerBottom) {
        title.classList.add("show");
      } else {
        title.classList.remove("show");
      }

      const contactInfoTop = contactInfo.getBoundingClientRect().top;
      if (contactInfoTop < triggerBottom) {
        contactInfo.classList.add("show");
      } else {
        contactInfo.classList.remove("show");
      }
    }
    window.addEventListener("scroll", movingContainer);
    movingContainer();
    return () => {
      window.removeEventListener("scroll", movingContainer);
    };
  }, []);

  return (
    <div className="contact">
      <p className="contact_title"> კონტაქტი</p>
      <div className="contactus">
        <div className="map_container">
          <img className="map_img" src={map} alt="" />
        </div>
        <div className="contact_info">
          <div className="each_info_container">
            <div className="each_info">
              <MdOutlineAccessTimeFilled className="icon" />
              <div className="info_description">09:00 - 21:00</div>
            </div>
            <div className="each_info">
              <MdLocationPin className="icon" />
              <div className="info_description">თბილისი, ისანი, ბერი გაბრიელ სალოსის 1 N 45</div>
            </div>
            <div className="each_info">
              <MdAttachEmail className="icon" />
              <div className="info_description">martiviaLogistic@gmail.com</div>
            </div>
            <div className="each_info">
              <BiSolidPhoneCall className="icon" />
              <div className="info_description">+995 571 15 30 74</div>
            </div>
          </div>
          <div className="social_media_icons">

             <div className="icon_container">
              <BsInstagram className="icon" />
            </div> 
            <div className="icon_container">
              <GrFacebookOption className="icon" />
            </div> 
            <div className="icon_container">
              <FiYoutube className="icon" />
            </div> 
            <div className="icon_container">
              <FaWhatsapp className="icon" />
            </div> 
            <div className="icon_container">
              <FaViber className="icon" />
            </div> 
            <div className="icon_container">
              <PiTelegramLogo className="icon" />
            </div> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
