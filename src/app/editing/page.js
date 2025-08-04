import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const Editing = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-y-2'>
      <p>Cannot fount any recording</p>
      <Link href="/">
        <Button>Go to Recorder</Button>
      </Link>
    </div>
  )
}

export default Editing
