'use client'
import React from 'react'
import { motion } from 'motion/react'

const Home = () => {
  return (
    <div className='h-screen w-full grid place-items-center'>
      <motion.button
        className='px-5 py-2 bg-orange-600 rounded-lg cursor-pointer'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
      >Start Recording</motion.button>
    </div>
  )
}

export default Home
