import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import MagicHouseCanvas from "../components/canvas/MagicHouseCanvas"
import logo from '../assets/images/main_white.png'


function Auth() {
    return (
        <div className='auth h-screen w-full flex flex-col justify-center items-center '>
            <nav className='auth-nav w-full h-20 fixed top-0 left-0 right-0 flex justify-center items-center '>
                <img src={logo} className='h-1/2'/>
            </nav>
            <div className='h-20 w-full'/>
            <div className='flex justify-center w-full h-full'>
                <div className="w-5/12 h-5/6 md:flex justify-center items-center hidden">
                    <MagicHouseCanvas/>
                </div>

                <div className="w-full md:w-1/2 bg-white sm:mt-10 -mt-16"  >
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Auth