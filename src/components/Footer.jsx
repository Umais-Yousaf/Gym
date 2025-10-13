
import React from 'react'
import {Link} from 'react-scroll'
import { Facebook, Instagram} from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-black via-gray-700 to-black text-white
    font-poppins '>
        <div className='container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3
        gap-8'>
            {/*brand section*/}
            <div>
                <h1 className='text-3xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r
                from-purple-500 to-blue-400 font-extrabold tracking-wider'>
                    AB GYM </h1>
                    <p className='text-gray-300 leading-relaxed mt-4 '>
                        Empowering lives through fitness. Join us on a journey to achieve
                        a healthier.
                    </p>
            </div>
            {/*navigation links*/}
            <div>
                <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent bg-gradient-to-r
                from-purple-500 to-blue-400 font-extrabold'>
                    Quick Links
                </h2>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <Link to='home' className='cursor-pointer hover:underline hover:text-gray-400'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to='opinions' className='cursor-pointer hover:underline hover:text-gray-400'>
                        Opinions
                        </Link>
                    </li>
                    <li>
                        <Link to='trainer' className='cursor-pointer hover:underline hover:text-gray-400'>
                        Trainer
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' className='cursor-pointer hover:underline hover:text-gray-400'>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
            {/*social links*/}
            <div>
                <h2 className='text-2xl text-transparent bg-clip-text bg-text-transparent
                bg-gradient-to-r from-purple-600 to to-blue-400 font-semibold'>
                    Follow Us
                </h2>
                <div className='flex mt-4 space-x-4'>
                    <a href="https://www.facebook.com/share/1AF79UidTp/" className='p-3 bg-gray-700 rounded-full hover:bg-blue-700
                    transition '>
                        <Facebook className='w-6 h-6'/>
                    </a>
                    <a href="https://www.tiktok.com/@ameer__804?_t=ZS-90VlRiRx75h&_r=1" className='p-3 bg-gray-700 rounded-full hover:bg-blue-700
                    transition '>
                        <FaTiktok className='w-6 h-6'/>
                    </a>
                    <a href="https://www.instagram.com/ame_erkhan804?utm_source=qr&igsh=MWVnMWdycHFkNzN4Mg==" className='p-3 bg-gray-700 rounded-full hover:bg-red-700
                    transition '>
                        <Instagram className='w-6 h-6'/>
                    </a>
                    
                </div>
            </div>

        </div>
        {/*bottom*/}
        <div className='bg-gray-950 text-gray-300 text-center py-4'>
            <p>© 2025 AB GYM . All rights reserved</p>
            <p className='text-white hover:text-gray-700 cursor-pointer '>Nextgen Web Services</p>


        </div>
      
    </footer>
  )
}

export default Footer
