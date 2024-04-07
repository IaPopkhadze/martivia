import React from 'react'
import Slider from './Slider'
import Videos from './Videos'
import FrequentQuestions from './FrequentQuestions'
import AboutUs from './AboutUs'
const MainContent = () => {
  return (
    <div>
        <Slider/>
        <Videos/>
        <FrequentQuestions/>
        <AboutUs/>
    </div>
  )
}

export default MainContent