'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils/cn';

const Home = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();

      setIsRecording(true);
      console.log('Recording started!');
    } catch (err) {
      setIsRecording(false);
      console.error('Error starting recording: ' + err.message);
    }
  };

  return (
    <div className='h-screen w-full grid place-items-center'>
      <motion.button
        className={cn(
          'px-5 py-2  rounded-lg cursor-pointer',
          isRecording ? 'bg-orange-600' : 'bg-green-600'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        onClick={handleStartRecording}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </motion.button>
    </div>
  )
}

export default Home
