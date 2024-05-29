import React from 'react'
import { Link } from 'react-router-dom'
import LandingNav from './LandingNav'
import ChestnutCanvas from './canvas/ChestnutCanvas'
function LandingHome() {
  return (
    <div className="w-full h-screen relative landing">
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
      <LandingNav />
      <div className='h-20'></div>
      <div class="flex flex-col items-start min-h-screen p-20">
        <h1 class="text-5xl font-bold text-white-200 mb-4">BINATNA <span className="text-tertiary">.</span></h1>
        <p class="text-xl font-semibold text-white-200 mb-4">Your secret spot for private chats with friends.</p>
        <p class="text-gray-300 mb-8">Invite friends to private chat rooms or chat with our friendly bots when you're alone.</p>
        <div class="flex space-x-4">
          <Link to="/register" className="font-medium bg-tertiary text-white px-4 py-2 rounded-md hover:opacity-95">Get started</Link>
          <Link to="#about" className="font-medium bg-transparent border border-white text-white-200 px-4 py-2 rounded-md hover:border-tertiary hover:text-tertiary">Learn more.</Link>
        </div>
      </div>
      <ChestnutCanvas/>
    </div>
  )
}

export default LandingHome
