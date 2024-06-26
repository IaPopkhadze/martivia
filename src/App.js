import style from "./Style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import MainContent from "./components/MainContent";
import HeavyEquipment from "./components/HeavyEquipment";
import "../node_modules/alk-sanet/css/alk-sanet.min.css";
import "bpg-arial-caps/css/bpg-arial-caps.min.css";
import "/node_modules/bpg-algeti/css/bpg-algeti.min.css";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import Vehicles from "./components/Vehicles";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { BsInstagram } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaViber } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function App() {
  const [startChat, setStartChat] = useState(null);
  const [showChat, setShowChat] = useState(null);
  const [toggleSocialMedia, setToggleSocialMedia] = useState(false);
  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
    setStartChat(true);
  };
  return (
    <BrowserRouter>
      <div className={`online_chat_icons ${toggleSocialMedia ? 'expanded':''}`}>
        <span className="icon_container" >
          <GrFacebookOption className="icon" />
        </span>
        <span className="icon_container" >
          <BsInstagram className="icon" />
        </span> 
        <span className="icon_container" >
          <FaWhatsapp className="icon" />
        </span>
      
        <span className="icon_container">
          <FiYoutube className="icon" />
        </span>
        <span className="icon_container">
          <FaViber className="icon" />
        </span>{" "}
        <span className="icon_container" >
          <PiTelegramLogo className="icon" />
        </span>
        <span className="icon_container" onClick={handleOpenChat}>
          <IoChatbubbleEllipsesSharp className="icon" />
        </span>

      </div>
        {showChat && (
          <>
            {" "}
            <div className="chat-box">
              <div className="close_icon_container">
                <IoClose className="close_icon" onClick={handleCloseChat} />
              </div>
              {startChat ? (
                <div className="start_chat">
                  <span className="enter_name">შეიყვანეთ სახელი</span>
                  <input type="text" className="chat_input" />
                  <div className="chat_btn" onClick={() => setStartChat(false)}>
                    ჩატის დაწყება
                  </div>
                </div>
              ) : (
                <div className="live_chat">
                  <div className="content">content</div>
                  <div className="type_container">
                    <input type="text" placeholder="..." className="txt" />
                  </div>
                </div>
              )}
            </div>
            <div className="responsive_live_chat">
              <div className="chat_content">this is content</div>
              <div className="chat_typing">
                <input type="text" placeholder="..." />
                <div className="send"> გაგზავნა</div>
              </div>
              <button className="close_chat" onClick={handleCloseChat}>
                ჩატის დახურვა
              </button>
            </div>
          </>
        )}
      <div className="toggle_social_media" onClick={() => setToggleSocialMedia(!toggleSocialMedia)}>
        {toggleSocialMedia ? <IoIosArrowDown className="arrow" /> : <IoIosArrowUp className="arrow" />}
      </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/HeavyEquipment" element={<HeavyEquipment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


