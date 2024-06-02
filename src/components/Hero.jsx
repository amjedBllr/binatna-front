import React from 'react'
import { Link } from 'react-router-dom'
import LandingNav from './LandingNav'
import ChestnutCanvas from './canvas/ChestnutCanvas'
function Hero() {
  return (
    <div className="w-full h-screen relative hero">
      <div className='air air1'></div>
      <div className='air air2'></div>
      <div className='air air3'></div>
      <div className='air air4'></div>
      <LandingNav />
      <div className='h-20' />
      <div className="flex flex-col items-start min-h-screen p-20">
        <h1 className="sm:text-5xl text-3xl font-bold text-white-200 mb-4">BINATNA <span className="text-tertiary">.</span></h1>
        <p className="sm:text-xl text-s font-semibold text-white-200 mb-4">Your secret spot for private chats with friends.</p>
        <p className="sm:text-lg text-s text-gray-300 mb-8">Invite friends to private chat rooms or chat with our friendly bots when you're alone.</p>
        <div className="flex space-x-4">
          <Link to="/register" className=" font-medium text-sm sm:text-base bg-tertiary text-white px-4 py-2 rounded-md hover:bg-primary active:opacity-90">Get started</Link>
          <Link to="#about" className="font-medium text-sm sm:text-base bg-transparent border border-white text-white-200 px-4 py-2 rounded-md hover:border-black-100 hover:text-black-100">Learn more.</Link>
        </div>
      </div>
      <ChestnutCanvas />
    </div>
  )
}

export default Hero
