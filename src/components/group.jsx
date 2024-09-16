import React from 'react';
import backgroundImage from '../assets/Group2.png';
import backgroundImage1 from '../assets/Group2a.png';

const Group = () => {
    return (
        <div className=''>
            <section
                className="bg-cover bg-center text-white w-full h-screen md:px-20 flex justify-center relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <div className='flex flex-col items-center space-y-24'>
                    <h2 className="max-w-2xl text-center p-5 rounded-lg relative z-10 mt-20 text-5xl text-black">
                        OUR PHILOSOPHY
                        <div className="h-1 bg-blue-500 w-80 mt-3 mx-auto mb-4 z-10 relative"></div>
                    </h2>

                    {/* Flex Container for Right Alignment */}
                    <div className="max-w-2xl text-center bg-opacity-50 p-5 rounded-lg relative z-10 mx-4 flex flex-col items-end left-72">
                        <p className="text-lg text-black md:text-xl text-right">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil minima aperiam necessitatibus voluptas delectus explicabo voluptatibus ducimus quaerat, eaque aliquam doloribus impedit incidunt pariatur qui quia molestiae voluptatem ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit similique vero accusamus. Deleniti voluptatem cumque qui.
                        </p>
                        <button className="w-full md:w-40 backdrop-filter bg-blue-800 p-3 rounded-lg relative z-10 mt-5">
                            Read More
                        </button>
                    </div>
                </div>

                <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: `url(${backgroundImage1})`,
                }}></div>
            </section>
        </div>
    );
};

export default Group;