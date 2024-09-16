import React from 'react';
import bg1 from "../assets/Design.png";
import bg2 from "../assets/section8.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <footer className="w-full h-screen">
      {/* Section with background image and text over it */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center z-10"
        style={{
          backgroundImage: `url(${bg2})`, // Use bg1 as the background image
        }}
      >
        <div className="absolute inset-0 h-96 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-3xl font-bold mb-48 ml-32">
          <li>inahle</li>
          <li>exhalee</li>
        <p className='text-blue-500 mt-0'>YOGA THERAPY</p>
        <div className="w-30 h-1 bg-blue-500"></div> 
        </h1>
      </div>
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg1})`, // Use bg1 as the background image
        }}
      >
        <div className="absolute inset-0 h-96 "></div>
        <h1 className="relative text-white ">
          <div className='flex flex-row space-x-52'>
            <div>
                <h1 className='font-bold text-3xl mt-48 '>abceds</h1>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
            </div>
            <div>
                <h1 className='font-bold text-3xl mt-48 '>abceds</h1>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
                <h6 className='w-25'>Lorem ipsum dolor sit amet consectetur</h6>
            </div>
            <div>
                <h1 className='font-bold text-3xl mt-48 '>abceds</h1>
                <div className='flex mt-4'>

                <h6 className='w-25'><FaFacebook size={30}/> </h6>
                <h6 className='w-25 ml-2'><FaInstagram size={30}/> </h6>
                <h6 className='w-25 ml-2'><FaLinkedin size={30}/> </h6>
                <h6 className='w-25 ml-2'><FaInstagram size={30}/> </h6>
                </div>
                <h6 className='w-25 opacity-0'>Lorem ipsum dolor sit amet consectetur</h6>
                <h6 className='w-25 opacity-0'>Lorem ipsum dolor sit amet consectetur</h6>
            </div>
          
            
          

          </div>
        </h1>
      </div>

      {/* Second background section with text */}
    </footer>
  );
};

export default Footer;