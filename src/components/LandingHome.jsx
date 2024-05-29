import React from 'react'
import MaskCanvas from './canvas/MaskCanvas'
import LandingNav from './LandingNav'
import main from '../assets/images/main.png'
function LandingHome() {
  return (
    <div className="w-full h-screen relative landing">
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
      <LandingNav/>
      
    </div>
  )
}

export default LandingHome