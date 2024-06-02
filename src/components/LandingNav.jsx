import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo1 from '../assets/images/main.png';
import logo2 from '../assets/images/main_blue.png';
import logo3 from '../assets/images/main_white.png';
import menu from '../assets/images/menu.png';
import close from '../assets/images/close.png';

function LandingNav() {
    const [isLogoHov, setIsLogoHov] = useState(false);
    const [isMenuSelected, setIsMenuSelected] = useState(false);

    return (
        <div className='w-full h-16 bg-secondary flex justify-between items-center px-10 sm:px-20 py-10 fixed top-0 z-50'>

            <ScrollLink to="hero" smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>
                <img
                    src={!isLogoHov ? logo3 : logo1}
                    onMouseOver={() => setIsLogoHov(true)}
                    onMouseOut={() => setIsLogoHov(false)}
                    className="h-10 cursor-pointer"
                    alt="Logo"
                />
            </ScrollLink>

            <ul className='hidden gap-10 sm:flex'>
                <li>
                    <RouterLink to="/register" className='text-white-200 hover:text-black-100'>Get started</RouterLink>
                </li>
                <li>
                    <RouterLink to="/login" className='text-white-200 hover:text-black-100'>Login</RouterLink>
                </li>
                <li>
                    <ScrollLink to="about" smooth={true} duration={500} className='text-white-200 hover:text-black-100 cursor-pointer'>
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="contact" smooth={true} duration={500} className='text-white-200 hover:text-black-100 cursor-pointer'>
                        Contact
                    </ScrollLink>
                </li>
            </ul>

            <img
                src={!isMenuSelected ? menu : close}
                onClick={() => setIsMenuSelected(!isMenuSelected)}
                className='h-6 sm:hidden cursor-pointer invert'
                alt="Menu"
            />
            {isMenuSelected && (
                <ul className='sm:hidden gap-10 flex flex-col justify-center items-center absolute bg-white-200 top-20 right-10 p-10 rounded-lg'>
                    <li>
                        <RouterLink to="/register" className='hover:text-secondary'>Get started</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login" className='hover:text-secondary'>Login</RouterLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500} className='hover:text-secondary cursor-pointer'>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default LandingNav;
