import React from 'react'
import Slider from './Slider'
import Videos from './Videos'
import FrequentQuestions from './FrequentQuestions'
import AboutUs from './AboutUs'
import Contact from './Contact'
const MainContent = () => {
  return (
    <div>
        <Slider/>
        <Videos/>
        <FrequentQuestions/>
        {/* <AboutUs/> */}
        <Contact/>
    </div>
  )
}

export default MainContent