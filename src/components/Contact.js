import React from "react";
import map from "../Assets/googlemap.jpg";
import { MdLocationPin } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { useEffect } from "react";


const Contact = () => {
  useEffect(() => {
  
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
      <p className="main_title"> კონტაქტი</p>
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

        </div>
      </div>
    </div>
  );
};

export default Contact;
