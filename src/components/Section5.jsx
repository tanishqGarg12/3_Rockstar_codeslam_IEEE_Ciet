import React from 'react';
import ldki from "../assets/ldki.png"; // Make sure the file extension is included if needed
import ldki2 from "../assets/ldki2.png"; // Make sure the file extension is included if needed
import section5 from "../assets/section5.png"; // Make sure the file extension is included if needed

const FifthSection = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" 
         style={{ backgroundImage: `url(${section5})` }}> 
    
      <div className="absolute ml-52 flex space-x-8 top-0" >
        <img 
          src={ldki} 
          alt="Image 1"
          className="h-96 shadow-lg"
        />
        <img 
          src={ldki2} 
          alt="Image 2"
          className="h-96  shadow-lg"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
      <div className="text-center p-8 ">
    <h1 className="text-5xl h-15 font-bold mb-4 bg-slate-600 text-blue-600 hover:text-blue-800 transition duration-300">
        YOGA
    </h1>
    <h1 className="text-5xl font-bold mb-4 bg-white text-blue-600 hover:text-blue-800 transition duration-300">
        REGISTRATION OPEN
    </h1>
    <h1 className="text-5xl font-bold mb-4  text-grey-600 hover:text-blue-800 transition duration-300">
        GET 15% OFF
    </h1>
    <button className="mt-6 bg-grey-600 font-semibold bg-gray-600   py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
        Sign up Now
    </button>
</div>
      </div>
    </div>
  );
};

export default FifthSection;