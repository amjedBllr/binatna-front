import React from 'react'
import logo1 from '../assets/images/main.png'
import logo2 from '../assets/images/main_blue.png'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'


function LandingNav() {
    const navigate = useNavigate()

    const [isLogoHov , setIsLogoHov] = useState(false)
    
    


  return (
    <div className='w-full h-16 bg-slate-50 flex justify-between items-center px-20 py-10 fixed top-0 z-50'>
        <img src={!isLogoHov?logo1:logo2} onMouseOver={_=>{setIsLogoHov(!isLogoHov)}} onMouseOut={_=>{setIsLogoHov(!isLogoHov)}} className="h-10 cursor-pointer"/>
        <ul className='flex gap-10'>
            <li>
                <Link to="/register" className='hover:text-secondary'>Get started</Link>
            </li>
            <li>
                <Link to="/login" className='hover:text-secondary'>Login</Link>
            </li>
            <li>
                <Link to="#about" className='hover:text-secondary'>About</Link>
            </li>
            <li>
                <Link to="#contact" className='hover:text-secondary'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default LandingNav