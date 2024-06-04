import React from 'react'
import { Outlet } from 'react-router-dom'
import MagicHouseCanvas from "../components/canvas/MagicHouseCanvas"
function Auth() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <nav className='w-full h-14 bg-black fixed top-0 left-0 right-0'> nav </nav>
            <div className='flex justify-center w-full h-4/6 bg-slate-500'>
                <div className="flex-1 h flex justify-center items-center">
                    <MagicHouseCanvas/>
                </div>

                <div className="flex-1"  >
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Auth