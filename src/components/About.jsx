import React from 'react';
import logo1 from '../assets/images/main.png';
import founder from '../assets/images/founder.png';

const About = () => {
  return (
    <div id="about" className="container mx-auto py-20">
      <div className="services flex flex-col items-start p-5">
        <h3 className='font-bold text-secondary text-2xl p-5 sm:pl-24 pl-5'>Our Services</h3>
        <br />
        <div className='w-full flex flex-col sm:flex-row justify-between sm:px-10'>
          <div class="card">
            <h4 className='font-semibold text-lg'>Secret Room Chats</h4>
            <p className='py-5'>Create private rooms with unique links and passwords. Only your invited friends can join</p>
          </div>
          <div class="card">
            <h4 className='font-semibold text-lg'>Interactive Chatbot
            </h4>
            <p className='py-5'>Chat with our cool bot when you’re alone or let it join group chats for fun interactions..</p>
          </div>
          <div class="card">
            <h4 className='font-semibold text-lg'>Total Privacy
            </h4>
            <p className='py-5'>No admins. No oversight. Your conversations are 100% private and secure.</p>
          </div>
        </div>
      </div>

      <div className="founder flex flex-col items-star p-5">
        <h3 className='font-bold text-secondary text-2xl p-5 sm:pl-24 pl-5'>Our Founder</h3>
        <br />
        <div className='w-full sm:px-10'>
          <div class="founder-card">
            <h4 className='font-semibold text-lg'>Hey, I’m Amjed Bellir</h4>
            <p className='py-5 w-8/12'>the 21-year-old creator of BINATNA. As a full-stack web developer and IT grad, I’m all about making secure and fun chat platforms. <br/> Thanks for choosing My platform. Enjoy the privacy and fun. Reach out anytime with questions or feedback!</p>
            <img src={founder} className="absolute right-28 top-5 h-60 -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
