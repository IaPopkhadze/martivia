import React, { useEffect, useState } from "react";

import test from "../Assets/car1.png";
import test1 from "../Assets/cover1.jpg";
import cover from "../Assets/cover.webp";
import test3 from "../Assets/new.jpg";
import sxva from "../Assets/sxva.webp";
import kart from "../Assets/cart.webp";
import { GrYoutube } from "react-icons/gr";
import video from "../Assets/video.mp4";
import { IoClose } from "react-icons/io5";

const Videos = () => {
  const [openVideo, SetOpenVideo] = useState(null);
  const images = [cover, test1, test3, kart, sxva, test, cover, test1];

  useEffect(() => {
    const videoContainers = document.querySelectorAll(".video_container");

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
    }
    window.addEventListener("scroll", movingContainer);
    movingContainer();
    return () => {
      window.removeEventListener("scroll", movingContainer);
    };
  }, []);

  return (
    <div id="videos" className="video">
      {images.map((image, index) => {
        return (
          <div className="video_container" key={index}>
            <img src={image} className="each_video" alt="" />
            <div className="video_overlay">
              <div className="overlay_content" onClick={() => SetOpenVideo(true)}>
                <span className="play_video"> ვიდეოს ნახვა</span>
                <GrYoutube className="video_icon" />
              </div>
            </div>
            <div className="video_description">
              <p className="video_title">სათაური</p>
              <p> აქ იქნება აქ იქნება ვიდეოს ვიდეო სსდა აღწერა და რამე რუმე ტექსტი ვიდეოს აღწერა და რამე რუმე ტექსტი</p>
            </div>
          </div>
        );
      })}
      {openVideo && (
        <div className="open_video_overlday">
          <div className="video_cont">
            <video style={{ opacity: openVideo ? 1 : 0 }} src={video} autoPlay loop controls className="videoo" />
          </div>

          <IoClose className="x" onClick={() => SetOpenVideo(false)} />
        </div>
      )}
    </div>
  );
};

export default Videos;
