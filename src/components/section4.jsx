import React from 'react';
import backgroundImage1 from '../assets/section4.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

const Section4 = () => {
  return (
    <section className="flex flex-col h-auto md:flex-col items-center md:items-start p-8">
      {/* Heading at the top */}
      <div className="w-full mb-6">
        <h1 className="md:max-w-2xl text-5xl font-bold flex justify-center m-auto border-4 border-blue-950">
          YOGA FOR BEGINERS
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        {/* Text on the left */}
        <div className="w-full md:w-1/2 p-4">
          <p className="text-lg mt-24">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis pariatur nisi nihil aut voluptas sint? Unde cupiditate quod molestiae doloremque sit tempora placeat deleniti, ducimus quos dolores modi provident inventore non ea vel! Vitae vel laborum assumenda dolorem id libero nihil quis dolores ratione. Error et libero beatae placeat
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At tenetur repudiandae voluptate quam perferendis optio laudantium aliquid explicabo soluta doloribus? Voluptatum eveniet, commodi tenetur quisquam dignissimos harum adipisci ratione sit ullam culpa nemo ipsa animi neque repudiandae quas fugiat possimus qui rem natus! Recusandae, consequatur. Dignissimos commodi nulla vero a?
          </p>
          
          {/* Read More Button with Arrow */}
          <div className="flex items-center justify-start mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
              <span className="mr-2">Read More</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Image on the right */}
        <div className="w-full md:w-1/2 ">
          <img
            src={backgroundImage1}
            alt="Yoga for Beginners"
            className="w-full h-1/2 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;