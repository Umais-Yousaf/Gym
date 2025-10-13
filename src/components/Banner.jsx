import React from 'react'
import { FaCertificate, FaDumbbell, FaFacebook, FaHeartbeat, FaInstagram, FaMedal, FaPlay, FaRunning, FaThumbsUp, FaTiktok, FaUser, FaUsers } from 'react-icons/fa'
import bgimage from '../assets/WhatsApp Image 2025-10-13 at 03.14.07_99040228.jpg';

const Banner = () => {
  return (
    <div>
        {/*banner section*/}
        <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col
        lg:flex-row items-center justify-center lg:justify-between'>
            {/*conatct section*/}
            <div className='relative z-10 flex flex-col justify-center items-start
            px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black
            via-transparent h-full w-full lg:w-1/2'>
                <h1  className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-extrabold mb-6 animate-slideInLeft text-center lg:text-left '>
                    Elevate your <span className='text-purple-500'>Workout</span>

                </h1>
                <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-slideInleft delay-200
                text-center  lg:text-left'>
                    Push harder than yesterday if you want a different tomorrow.” 💪

                    “No excuses, just results — your only limit is you.”

                    “Train insane or remain the same — greatness starts here.”
                    

                </p>
                {/*icons*/}
                <div className='flex flex-wrap sm:flex-row gap-4 justify-center
                lg:justify-start mb-8 animate-fadeIn delay-400'>
                    <div className='flex items-center gap-3 group'>
                        <FaDumbbell className='text-purple-500 text-2xl sm:text-3xl
                        transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
                        <span className='text-sm sm:text-lg font-medium'>
                            Strenth Training

                        </span>

                    </div>

                         <div className='flex items-center gap-3 group'>
                        <FaHeartbeat className='text-purple-500 text-2xl sm:text-3xl
                        transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
                        <span className='text-sm sm:text-lg font-medium'>
                            Cardio Fitness

                        </span>

                    </div>
                         <div className='flex items-center gap-3 group'>
                        <FaRunning className='text-purple-500 text-2xl sm:text-3xl
                        transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
                        <span className='text-sm sm:text-lg font-medium'>
                           Endurance

                        </span>

                    </div>

                </div>
                {/*buttons*/}
                <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-6'>
                    <button className='px-4 sm:px-6 py-2 sm:py-3 bg-purple-400 text-black
                    font-semibold rounded-full shadow-md hover:bg-purple-500 transition-transform
                    transform hover:scale-105 delay-600 '>
                        Get started

                    </button>
                   <a className='cursor-pointer'
                    href="https://www.tiktok.com/@ameer__804?_t=ZS-90VlRiRx75h&_r=1">
                     <button  className='px-4 cursor-pointer sm:py-6 py-2 sm:py-3 bg-white text-black
                    font-semibold rounded-full shadow-md hover:bg-gray-100 transition-transform
                    transform hover:scale-105 delay-700 flex items-center gap-2 '>
                        <FaPlay className='text-black text-xl'/>Watch Demo

                    </button>


                   </a>
                </div>
                {/*social media icons*/}
                <div className='flex gap-6 mt-4 animate-fadeIn delay-800 justify-center
                lg:justify-start'>
                    <a href="https://www.facebook.com/share/1AF79UidTp/" aria-label='FaceBook'
                    className='text-purple-500 text-2xl sm:text-3xl transition-transform
                    transform hover:scale-110'>
                        <FaFacebook/>
                    </a>
                    <a href="https://www.instagram.com/ame_erkhan804?utm_source=qr&igsh=MWVnMWdycHFkNzN4Mg==" aria-label='Instagram'
                    className='text-purple-500 text-2xl sm:text-3xl transition-transform
                    transform hover:scale-110'>
                        <FaInstagram/>
                    </a>
                    <a href="https://www.tiktok.com/@ameer__804?_t=ZS-90VlRiRx75h&_r=1" aria-label='TikTok'
                    className='text-purple-500 text-2xl sm:text-3xl transition-transform
                    transform hover:scale-110'>
                        <FaTiktok/>
                    </a>

                </div>

            </div>
            {/*bg image */}
            <div className='absolute top-0 right-0 h-full w-full lg:w-1/2 flex justify-center items-center
            '>
                <img src={bgimage} alt="bg"
                className='h-full w-full mb-10 object-contain opacity-80 animate-zoomInSlow' />
            </div>

        </div>
        {/*new sextion */}
        <div className='bg-black py-12 sm:py-16 text-white'>
            <div className='container mx-auto px-4 sm:px-8 text-center'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap12'>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-200'>
                        <FaMedal className='text-purple-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                            5+ Years of Services
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-400'>
                        <FaCertificate className='text-purple-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                            Our Certfied Trainer
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-600'>
                        <FaUsers className='text-purple-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                           1000+ Happy Members
                        </span>
                    </div>
                    <div className='flex flex-col items-center gap-4 animate-fadeIn delay-800'>
                        <FaThumbsUp className='text-purple-500 text-3xl sm:text-4xl'/>
                        <span className='text-sm sm:text-lg md:text-xl font-semibold'>
                            95% Customer Satisfaction 
                        </span>
                    </div>




                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Banner
