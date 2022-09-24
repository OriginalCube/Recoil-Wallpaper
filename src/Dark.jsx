import React from 'react'
import Clock from './components/Clock'
import AudioVisualDark from './dark/AudioVisualDark'
import CanvasRain from './dark/CanvasRain'

const Dark = (props) => {
  //audio Vis <AudioVisualDark /> 
  React.useEffect(()=>{
    props.setColor('dark');
  },[])
  return (
    <div>
        <img src='./assets/images/darkBackground.png' className='absolute h-auto w-auto' alt=''/>
        {props.audioVis==='true'?<AudioVisualDark />:null} 
        <img src='./assets/images/darkForeground.png' className='absolute h-auto w-auto' alt=''/>
        {props.canvas==='true'?<CanvasRain/>:null} 
        <img src='./assets/images/chisatoDark.png' className='absolute h-auto w-auto' alt=''/>
        <img src='./assets/images/takinaDark.png' className='absolute h-auto w-auto' alt=''/>
        {props.clock==='true'?<Clock mode='white'/>:null} 
    </div>
  )
}

export default Dark