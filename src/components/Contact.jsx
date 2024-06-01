import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'

import MagicHouseCanvas from './canvas/MagicHouseCanvas';
const Contact = () => {

    const [message, setMessage] = useState({
        email: '',
        name: '',
        message: '',
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setMessage(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="h-screen mx-auto pt-24">
            <div className='w-full h-full flex justify-center items-center px-5 py-10 text-white'>

                <motion.div
                    className='contact-info overflow-hidden cursor-grab active:cursor-grabbing flex flex-col justify-start items-center gap-3 py-9 rounded-xl bg-secondary w-96 h-fit'
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
                        top: -150,
                        left: -150,
                        right: 150,
                        bottom: 150,
                    }}
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.05)" // Subtle box shadow
                    style={{
                        // Gradient for corner shine
                        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 80%)",
                        backgroundPosition: "top left",
                        backgroundSize: "100% 200%",
                    }}
                >
                    <h4 className="font-medium text-white text-xl p-5">Contact information</h4>
                    <div className='w-3/4 text-sm font-light pb-28'>
                        <p className="w-full break-words pb-16">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.</p>
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



                <div className='flex flex-col gap-5 h-5/6 w5/12 text-black-100'>
                    <h4 className="font-medium">Send Message : </h4>
                    <label for="email">Email</label>
                    <input name="email" value={message.email} onChange={handleChange} />
                    <label for="name">Name</label>
                    <input name="name" value={message.name} onChange={handleChange} />
                    <label for="message">Message</label>
                    <textarea name='message' value={message.message} onChange={handleChange}></textarea>
                    <input type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default Contact;