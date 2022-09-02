import React from 'react'
import AudioVisualDark from './dark/AudioVisualDark'

const Dark = () => {
 
  //audio Vis <AudioVisualDark /> 

  return (
    <div>
        <img src='./assets/images/darkBackground.png' className='absolute h-auto w-auto' alt=''/>
        <img src='./assets/images/darkForeground.png' className='absolute h-auto w-auto' alt=''/>
        <div className='filterCard'></div> 
        <img src='./assets/images/chisatoOption.png' className='absolute h-auto w-auto' alt=''/>
    </div>
  )
}

export default Dark