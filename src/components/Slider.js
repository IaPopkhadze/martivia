import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, EffectFade} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import Video from '../Assets/video.mp4'

const Slider = () => {
  return (
    <div className='background_video'>
      <video src={Video} autoPlay loop muted></video>
      <div className="video_overlay">
        <p className='overlay_text'>შეიძინე ავტომობილი</p>
      </div>
    </div>
  )
}

export default Slider