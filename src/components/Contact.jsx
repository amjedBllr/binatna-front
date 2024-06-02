import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
import talk from '../assets/images/talk.avif'


const Contact = () => {

    return (
        <div className="h-screen mx-auto pt-24">
            <div className='w-full h-full flex-col sm:flex-row flex justify-center items-center gap-x-20 px-5 text-white relative'>

            <motion.img 
            src={talk}
            className='w-2/4'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.45 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 550,
              bottom: 500,
            }}
            />



                <motion.div
                    className='contact-info overflow-hidden cursor-grab active:cursor-grabbing flex flex-col justify-start items-center gap-3 py-9 rounded-xl bg-secondary w-96 h-fit z-40'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    whileHover={{
                        rotateX: 10,
                        rotateY: 10,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{
                        rotateX: -10,
                        rotateY: -10,
                        scale: 0.95,
                        transition: { duration: 0.2 }
                    }}
                    drag
                    dragConstraints={{
                        top: -250,
                        left: -650,
                        right: 150,
                        bottom: 150,
                    }}
                >
                    <h4 className="font-medium text-white text-xl p-5 hover:text-black-100">Contact information</h4>
                    <div className='w-3/4 text-sm font-light pb-28'>
                        <p className="w-full break-words pb-16 hover:text-black-100">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.</p>
                        <div className='flex justify-start items-center mt-2 pb-1 hover:text-black-100'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='pl-5'>bamjed86@gmail.com</p>
                        </div>
                        <div className='flex justify-start items-center mt-2 hover:text-black-100'>
                            <FontAwesomeIcon icon={faPhone} />
                            <p className='pl-5'>+213 556038331</p>
                        </div>
                    </div>
                    <div className='flex gap-5 w-3/4'>
                        <a href="https://www.facebook.com/amjed.bellir" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faFacebook} className="text-lg hover:text-black-100" />
                        </a>
                        <a href="https://www.twitter.com/bamjed" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-black-100" />
                        </a>
                        <a href="https://www.instagram.com/amjed_bellir" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-black-100" />
                        </a>
                        <a href="https://github.com/amjedBllr" target="_blank" rel="noreferrer noopener">
                            <FontAwesomeIcon icon={faGithub} className="text-lg hover:text-black-100" />
                        </a>
                    </div>
                </motion.div>
               
            </div>
        </div>
    );
};

export default Contact;