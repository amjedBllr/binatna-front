import React from 'react';
import logo1 from '../assets/images/main.png';
import founder from '../assets/images/founder.png';

const About = () => {
  return (
    <div id="about" className="container mx-auto py-40 h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-secondary">About</h2>
        <div className="about-services md:order-1 bg-secondary rounded-lg p-10 w-2/3">
          <h3 className="text-xl font-bold mb-5 text-white">Our Services</h3>
          <ul className="list-disc space-y-3 text-white">
            <li>
              <h4 className="font-bold text-white">Secret Room Chats</h4>
              <p className="text-gray-200">
                With BINATNA , you can easily create a secret room chat
                and invite others through a unique link and password. This
                ensures that only the people you want in the room can join,
                keeping your conversations private and secure. Share the link
                and password with your friends or colleagues, and start
                chatting without worrying about privacy breaches.
              </p>
            </li>
            <li>
              <h4 className="font-bold text-white">Interactive Chatbot</h4>
              <p className="text-gray-200">
                Don't feel like chatting alone? No problem! Our built-in
                chatbot is here to keep you company. You can add the chatbot to
                your chat room, and it will interact with everyone in the room.
                The chatbot can engage in conversations, answer questions, and
                even provide entertainment, making your chat experience more
                lively and enjoyable.
              </p>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default About;
