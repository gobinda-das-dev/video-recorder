'use client'
import { cn } from '@/lib/utils/cn'
import React from 'react'
import { motion } from 'motion/react'

const Button = ({ className, children }) => {
   return (
      <motion.button
         className={cn('px-5 py-2 bg-green-600 rounded-lg cursor-pointer', className)}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 1 }}
      >
         {children}
      </motion.button>
   )
}

export default Button
