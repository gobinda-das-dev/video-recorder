'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils/cn';
import Link from 'next/link';
import Button from '@/lib/ui/Button';

const Home = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  const handleStartRecording = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      recordedChunksRef.current = [];
      const mediaRecorder = new window.MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);

        setRecordedVideoURL(url);
        setIsPreviewVisible(true);

        // Stop all tracks to release the screen
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();

      setIsRecording(true);
      setIsPreviewVisible(false);
      setRecordedVideoURL(null);
      console.log('Recording started!');
    } catch (err) {
      setIsRecording(false);
      console.error('Error starting recording: ' + err.message);
    }
  };

  return (
    <div className='h-screen w-full grid place-items-center'>
      <div className="flex flex-col items-center gap-6">
        {(isPreviewVisible && recordedVideoURL) ? (
          <Link href={'/editing?video=' + recordedVideoURL}>
            <Button>Start Editing</Button>
          </Link>
        ) : (<Button
          className={isRecording ? 'bg-orange-600' : 'bg-green-600'}
          onClick={handleStartRecording}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>)}

        {isPreviewVisible && recordedVideoURL && (
          <div className="mt-4 flex flex-col items-center">
            <span className="mb-2 text-lg font-semibold">Recording Preview:</span>
            <video
              src={recordedVideoURL}
              controls
              className="rounded-lg border border-slate-700 max-w-full max-h-[60vh]"
            />
          </div>
        )}
      </div>
    </div >
  )
}

export default Home
