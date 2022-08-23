import React from 'react'
import AudioData from './components/AudioData';
import AudioVisualizer from './components/AudioVisualizer';
import Clock from './components/Clock';

const Main = () => {
  const [background, setBackground] = React.useState('chisato');
  const [hover, setHover] = React.useState(true);
  const onClock = () =>{
    setBackground(background==='chisato'?'takina':'chisato');
  }

  const onHover = () =>{
    setHover(false);
    setTimeout(() => {
      setHover(true);
      console.log('loaded');
    }, 3000);
  }
  return (
    <div>
      {hover?<img className='absolute h-auto w-auto' 
      src={`./assets/images/${background}.png`} alt='chisato'/>:null}
      {hover?<div className='hoverMain absolute' onMouseEnter={onHover}></div> 
      :<img className='absolute h-auto w-auto'  src={`./assets/images/chisatoHover.png`} 
      alt=''/>} 
      <div onClick={onClock}><Clock className='z-100'/></div>
      <AudioData/>
    </div>
  )
}

export default Main