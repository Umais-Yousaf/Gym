import React from 'react'
import {motion} from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-b
    from-gray-900 via-gray-600 to-black text-white px-6' id='contact'>
        <motion.div initial={{opacity: 0, x: -50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        className='w-full max-w-3xl lg:max-w-5xl grid lg:grid-cols-2 gap-8'>
            {/*adress setion*/}
            <div className='bg-gray-600 p-6 rounded-2xl shadow-lg'>
                <h2 className='text-3xl lg:text-4xl font-bold text-transparent
                bg-clip-text  bg-text-transparent bg-gradient-to-r from-pink-400 to-purple-500
                mb-6'>
                    Get in Touch

                </h2>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                        <MapPin className='w-6 h-6 text-blue-500'/>
                        <p className='text-lg font-medium'>Ashan Plaza,Main Dhoke Gujra Road,
                          Rawalpindi.
                        </p>
                    </div>
                     <div className='flex items-center space-x-3'>
                        <Phone className='w-6 h-6 text-blue-500'/>
                        <p className='text-lg font-medium'>03365341138, 03075166158 </p>
                    </div>
                     <div className='flex items-center space-x-3'>
                        <Mail className='w-6 h-6 text-blue-500'/>
                        <p className='text-lg font-medium'>ABGYM@agmail.com</p>
                    </div>

                </div>

            </div>
            {/*contact form*/}
            <motion.form  initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        className='bg-gray-600 p-6 rounded-2xl space-y-6'>
                <h2 className='text-3xl lg:text-4xl font-bold text-transparent
                bg-clip-text  bg-gradient-to-r from-pink-400 to-purple-500
                mb-4'>Contact Us
              </h2>
              <div>
                <label className='block text-sm font-medium mb-2'>Your Name</label>
                <input type="text" placeholder='Enter Your Name' className='w-full p-3 rounded-lg
                bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600'/>
              </div>
               <div>
                <label className='block text-sm font-medium mb-2'>Email</label>
                <input type="email" placeholder='Enter Your E-mail' className='w-full p-3 rounded-lg
                bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600'/>
              </div>
               <div>
                <label className='block text-sm font-medium mb-2'>Message</label>
                <textarea rows="4" placeholder='Enter Your Message' className='w-full p-3 rounded-lg
                bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600'>
                    </textarea>
              </div>
              <button type='submit' className='w-full p-3 bg-gradient-to-r  from-purple-400 top-6
              rounded-lg text-lg font-semibold hover:opacity-90  transition'>
                Send Message
              </button>
              </motion.form>
        </motion.div>
      
    </div>
  )
}

export default Contact
