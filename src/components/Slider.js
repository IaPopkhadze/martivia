import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import backgroundImg from "../Assets/cover1.jpg";

const Slider = () => {
  return (
    <div className="background_image_container">
      {/* <img src={backgroundImg} alt="image" className="background_image" /> */}
      <div className="background_image_overlay">
        <p className="overlay_text">შეიძინე ავტომობილი <br/> საუკეთესო მდგომარეობაში, საუკეთესო ფასად </p>
        <div className="btn_continer">
          <div className="my_btn">მძიმე ტექნიკა</div>

          <div className="my_btn"> მსუბუქი ავტომობილები</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
