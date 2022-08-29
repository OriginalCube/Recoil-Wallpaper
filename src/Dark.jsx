import React from 'react'
import AudioVisualDark from './dark/AudioVisualDark'

const Dark = () => {
  return (
    <div>
        <img src='./assets/images/darkBackground.png' className='absolute h-auto w-auto' alt=''/>
        <AudioVisualDark /> 
        <img src='./assets/images/darkForeground.png' className='absolute h-auto w-auto' alt=''/>
    </div>
  )
}

export default Dark