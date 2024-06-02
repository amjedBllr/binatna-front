import React from 'react';
import logo1 from '../assets/images/main.png';
import founder from '../assets/images/founder.png';
import { motion } from 'framer-motion'


const About = () => {
  return (
    <div id="about" className="lg:container mx-auto py-20">
      <div className="services -my-2 flex flex-col items-start p-5">
        <motion.h3 className='hover:cursor-grab active:cursor-grabbing font-bold text-secondary text-2xl p-5 sm:pl-24 pl-5'
        drag
        dragConstraints={{
          top: -40,
          left: -40,
          right: 440,
          bottom: 540,
        }}
        >Our Services</motion.h3>
        <br />
        <div className='w-full flex flex-col sm:flex-row justify-between sm:px-10 gap-5'>

          <motion.div className="hover:cursor-grab active:cursor-grabbing card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.45 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 450,
              bottom: 350,
            }}
          >
            <h4 className='font-semibold text-lg'>Secret Room Chats</h4>
            <p className='py-5'>Create private rooms with unique links and passwords. Only your invited friends can join</p>
          </motion.div>

          <motion.div className="card hover:cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.45 }}
            drag
            dragConstraints={{
              top: -20,
              left: -250,
              right: 250,
              bottom: 350,
            }}
          >
            <h4 className='font-semibold text-lg'>Interactive Chatbot
            </h4>
            <p className='py-5'>Chat with our cool bot when you’re alone or let it join group chats for fun interactions..</p>
          </motion.div>

          <motion.div class="card hover:cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.45 }}
            drag
            dragConstraints={{
              top: -50,
              left: -450,
              right: 50,
              bottom: 350,
            }}
          >
            <h4 className='font-semibold text-lg'>Total Privacy
            </h4>
            <p className='py-5'>No admins. No oversight. Your conversations are 100% private and secure.</p>
            </motion.div>
        </div>
      </div>

      <div className="founder -my-2 flex flex-col items-start p-5">
        <motion.h3 className='hover:cursor-grab active:cursor-grabbing font-bold text-secondary text-2xl p-5 sm:pl-24 pl-5'
        drag
        dragConstraints={{
          top: -340,
          left: -40,
          right: 440,
          bottom: 240,
        }}
        >Our Team</motion.h3>
        <br />
        <div className='w-full sm:px-10'>
        <motion.div class="hover:cursor-grab active:cursor-grabbing founder-card"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.45 }}
            drag
            dragConstraints={{
              top: -450,
              left: -50,
              right: 50,
              bottom: 50,
            }}
          >
            <h4 className='font-semibold text-lg'>Hey, I’m Amjed Bellir</h4>
            <p className='py-5 sm:w-8/12 w-5/6 sm:tracking-normal tracking-wide'>the 21-year-old creator of BINATNA. As a full-stack web developer & designer and IT grad, I’m all about making secure and fun chat platforms. <br /><br /> Thanks for choosing My platform. Enjoy the privacy and fun. Reach out anytime with questions or feedback!</p>
            <img src={founder} className="absolute opacity-65 -z-1 sm:-right-8 md:right-16 sm:top-0 top-5 h-60 hidden sm:block" />
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
