import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-screen h-[5rem] pt-7">
            <div className="flex justify-center items-center w-full text-[#49c9d4] h-full">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <svg
                            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static w-full justify-center h-full`}>
                    <ul className="flex flex-row md:flex-row text-[#49c9d4] justify-evenly items-center w-full text-[1.6rem]">
                        <li>|</li>
                        <li className='text-[#49c9d4]'>
                            <a href="#home" className="px-3 py-2 rounded-md">HOME</a>
                        </li>
                        <li>|</li>
                        <li className='text-[#49c9d4]'>
                            <a href="#about" className="px-3 py-2 rounded-md">ABOUT</a>
                        </li>
                        <li>|</li>
                        <li className='text-[#49c9d4]'>
                            <a href="#services" className="px-3 py-2 rounded-md">BLOG</a>
                        </li>
                        <li>|</li>
                        <li className='text-[#49c9d4]'>
                            <a href="#contact" className="px-3 py-2 rounded-md">CONTACT</a>
                        </li>
                        <li>|</li>
                        <li>
                            <a href="#" className="px-3 py-2 rounded-md"><FiAlignJustify /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
