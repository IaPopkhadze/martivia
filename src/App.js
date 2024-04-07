import style from "./Style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import MainContent from "./components/MainContent";
import "../node_modules/alk-sanet/css/alk-sanet.min.css";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function App() {
  const [startChat, setStartChat] = useState(null);
  const [showChat, setShowChat] = useState(null);
  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
    setStartChat(true);
  };
  return (
    <BrowserRouter>
      <div className="social_media_icons">
        <span className="icon_container">
          <IoLogoYoutube className="icon" />
        </span>
        <span className="icon_container">
          <BsFacebook className="icon" />
        </span>
        <span className="icon_container">
          <RiInstagramFill className="icon" />
        </span>
        <span className="icon_container" onClick={handleOpenChat}>
          <IoChatbubbleEllipsesSharp className="icon" />
        </span>

        {showChat && (
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
        )}
      </div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
