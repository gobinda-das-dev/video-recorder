'use client'
import Button from '@/lib/ui/Button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Editing = () => {
  const searchParams = useSearchParams()
  const videoUrl = searchParams.get('video');

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-y-2'>
      {!videoUrl ? (
        <>
          <p>Cannot fount any recording</p>
          <Link href="/">
            <Button>Go to Recorder</Button>
          </Link>
        </>
      ) : (
        <video
          src={videoUrl}
          controls
          className='w-full h-full object-cover'
        />
      )}
    </div>
  )
}

export default Editing
