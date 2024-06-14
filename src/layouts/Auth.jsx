import React , {Suspense} from 'react'
import { Outlet , Link } from 'react-router-dom'
import MagicHouseCanvas from "../components/canvas/MagicHouseCanvas"
import logo from '../assets/images/main_white.png'
import Loader from '../components/Loader'

function Auth() {
    return (
        <Suspense fallback={<Loader/>}>
        <div className='auth h-screen w-full flex flex-col justify-center items-center '>
            <nav className='auth-nav w-full h-20 fixed top-0 left-0 right-0 flex justify-center items-center '>
            <Link
              to="/"
              className="h-full flex justify-center items-center"
            >
              <img src={logo} className='h-1/2'/>
            </Link>
                
            </nav>
            <div className='h-20 w-full'/>
            <div className='flex justify-center w-full h-full md:gap-20'>
                <div className="w-5/12 h-5/6 md:flex justify-center md:justify-end items-center hidden">
                    <MagicHouseCanvas/>
                </div>

                <div className="w-full md:w-1/2 bg-white sm:mt-2 -mt-16"  >
                    <Outlet />
                </div>

            </div>
        </div>
        </Suspense>
    )
}

export default Auth