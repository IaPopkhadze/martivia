import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import backgroundImg from "../Assets/cover1.jpg";
import Vehicles from "./Vehicles";
import { Link } from "react-router-dom";


const Slider = () => {
  return (
    <div className="background_image_container">
      <div className="background_image_overlay">
        <p className="overlay_text">შეიძინე ავტომობილი  საუკეთესო მდგომარეობაში, <br/> საუკეთესო ფასად </p>
        <div className="btn_continer">
      

          <Link to='vehicles' className="my_btn"> მსუბუქი ავტომობილები</Link>    <Link className="my_btn" >მძიმე ტექნიკა</Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
