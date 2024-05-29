import React from 'react'
import Hero from '../../components/Hero.jsx'
import About from '../../components/About.jsx'
function Landing() {
  return (
    <div id='landing-page' className="h-screen landing">
      <Hero />
      <About />
    </div>
  )
}

export default Landing