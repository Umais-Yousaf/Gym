import React from 'react'

import wch1 from "../assets/WhatsApp Image 2025-10-13 at 04.01.25_f2049e1f.jpg";
import wch2 from "../assets/WhatsApp Image 2025-10-13 at 04.01.25_25efcea1.jpg";
import wch3 from "../assets/WhatsApp Image 2025-10-13 at 04.01.26_9dbce848.jpg";

const Wcu = () => {
  return (
    <div className='bg-gradient-to-b from-black via-gray-800 to-black py-12 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6lg:px-8'>
            {/*heading*/}
            <div className='text-center mb-12'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black
                via-gray-500 to-teal-300 text-transparent bg-clip-text  '>
                    Why Choose us

                </h2>
                <p className='mt-4  text-gray-400 text-sm sm:text-base lg:text-lg font-light'>
                    Discover why we stand with your muscle,commitment and results.

                </p>

            </div>
            {/*content section */}
            <div className='flex flex-col lg:flex-row items-start gap-12'>
                {/*left section */}
                <div className='lg:w-1/2 w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:-ml-4
               lg:-ml-6 xl:-ml-8  '>
                {[
                    {
                        title: "Expert Trainer",
                        text: "Highly qualified trainer to help you achieve your goals.",

                    },
                    {
                         title: "Modern Equipment",
                        text: "Access to state of the-art.",

                    },
                    {
                         title: "Award Winning",
                        text: "Recognized for excellence in fitness services .",

                    },
                    {
                         title: "Community Driven",
                        text: "A supportive community that motivate you.",

                    },

                ].map((box, index) => (
                    <div key={index}
                    className='relative flex flex-col justify-center items-center space-x-4
                    p-6 bg-gradient-to-r from-purple-100 via-pink-200 to-indigo-400
                    text-gray-600 rounded-xl shadow-lg hover:scale-105 transition-transform
                    duration-300'>
                        <h4 className='font-extrabold text-lg sm:text-xl text-center'>{box.title}</h4>
                        <p className='text-sm sm:text-md font-light text-center'>{box.text}</p>

                    </div>
                ))}

                </div>

                </div>
                {/*right section */}
                <div className='lg:w-1/2 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                    {/*two vertical image*/}
                    <div className='grid grid-rows-2 gap-6 '>
                        <img src={wch1} alt='img1' loading='lazy'
                        className='w-full h-full object-cover rounded-lg shadow-lg border
                        border-gray-700 hover:scale-105 transition-transform
                        duration-300 '/>

                         <img src={wch2} alt='img1' loading='lazy'
                        className='w-full h-full object-cover rounded-lg shadow-lg border
                        border-gray-700 hover:scale-105 transition-transform
                        duration-300 '/>
                    </div>
                    {/*horizontal image*/}
                    <div className='w-full'>
                        <img src={wch3} alt="img3" loading='lazy'
                        className='w-full h-full object-cover rounded-lg shadow-lg border
                        border-gray-700 hover:scale-105 transition-transform
                        duration-300 '/>
                         

                    </div>


                </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Wcu
