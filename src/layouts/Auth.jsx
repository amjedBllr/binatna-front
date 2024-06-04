import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import MagicHouseCanvas from "../components/canvas/MagicHouseCanvas"
import logo from '../assets/images/main.png'
function Auth() {
    return (
        <div className='auth h-screen w-full flex justify-center items-center'>
            <nav className='w-full h-20 fixed top-0 left-0 right-0 flex justify-center items-center '>
                <img src={logo} className='h-1/2'/>
            </nav>
            <div className='flex justify-center w-full h-4/6'>
                <div className="w-1/2 h sm:flex justify-center items-center hidden">
                    <MagicHouseCanvas/>
                </div>

                <div className=" w-full sm:w-1/2"  >
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Auth