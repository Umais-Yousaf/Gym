import React from 'react'

import Mot1 from '../assets/WhatsApp Image 2025-10-13 at 03.23.13_b78fa118.jpg'
import Mot2 from '../assets/WhatsApp Image 2025-10-13 at 03.23.14_b5cc66de.jpg'
import Mot3 from '../assets/WhatsApp Image 2025-10-13 at 03.23.15_2f1796ed.jpg'
import Mot4 from '../assets/WhatsApp Image 2025-10-13 at 03.23.16_6116a04a.jpg'
import Mot5 from '../assets/banner.png'
import Mot6 from '../assets/2025101211423980.jpg'

const trainer = [Mot1, Mot2, Mot3, Mot4, Mot5, Mot6];


const Mt = () => {
  return (
    <div className='bg-gradient-to-b from-black via-gray-900 to-black py-12'
    id='trainer'> 
    {/*heading secton */}
    <div className='text-center mb-10 px-4'>
      <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300
        to-sky-300'>
          Meet Our Trainer
        </span>
      </h2>
      <p className='text-sm md:text-lg text-gray-400 mt-4 max-w-2xl mx-auto'>
        Our professional trainer are dedicated to helping you reach your
       fitness goals with expert guidance and motivation,ensuring you achieve your
       goals.

      </p>

    </div>
    {/*image grid*/}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10
    lg:px-20 '>
      {trainer.map((imgSrc, index) => (
        <div key={index} className='group relative overflow-hidden rounded-xl shadow-lg
        bg-gradient-to-br from-gray-800 to-gray-900 transition-transform transform 
        hover:shadow-2xl'>
          {/*lazy loading*/}
          <img src={imgSrc} alt={`Trainer ${index+1}`}
          className='w-full aspect-[3/2] object-cover transition-transform duration-500
          ease-out group-hover:scale-110 '/>

          {/*overlay content*/}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/60
          to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
          flex flex-col justify-end p-4'>
            <h3 className='text-lg md:text-xl font-bold text-white mb-1 '>Trainer {index+1}</h3>
            <p className='text-xs md:text-sm text-gray-300 '>Certified Fitness & Wellness Coach</p>
          </div>

        </div>
      ))}

    </div>

    </div>
  )
}

export default Mt
