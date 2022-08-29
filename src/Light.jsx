import React from 'react'
import AudioPlayer from './components/AudioPlayer';
import AudioVisualizer from './components/AudioVisualizer';
import Canvas from './components/Canvas';
import Clock from './components/Clock';


const Light = (props) => {
  const audioVoice = React.useRef(new Audio());
  const [background, setBackground] = React.useState('chisato');
  const [audioReady, setAudioReady] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [hover, setHover] = React.useState(true);
  let chisatoVoice = ['Ahoo', 'Dama', 'Neee', 'Wooo'] 

  const onHover = () =>{
    setError(false); 
    if(audioReady===true){
      setHover(false);
      audioVoice.current.src = `./assets/audios/${chisatoVoice[Math.floor(Math.random()*chisatoVoice.length)]}.mp3`
      audioVoice.current.volume = .5;
      audioVoice.current.play().catch(()=>{
        setTimeout(() => {setHover(true)}, 3000);
        setError(true);
      }); 
    }
    error?setTimeout(() => {setAudioReady(true)}, 500):setAudioReady(false);
  }


  //{audioVis?<AudioVisualizer/>:null}
  //Moves Picture if ready 
  audioVoice.current.onended = () =>{
    setHover(true);
    setTimeout(() => {
      setAudioReady(true);
    }, 500);
  } 


  return (
    <div>
        {hover?<img className='absolute h-auto w-auto' 
        src={`./assets/images/${background}.png`} alt='chisato'/>:null}
        {hover?<div className='hoverMain absolute' onMouseEnter={onHover}></div> 
        :<img className='absolute h-auto w-auto'  src={`./assets/images/chisatoHover.png`} 
        alt=''/>} 
        {props.clock?<Clock />:null}
        {props.canvas?<Canvas />:null}
        {props.audioVis?<AudioVisualizer/>:null}
        {props.audioPlay?<AudioPlayer />:null}
 </div>
  )
}

export default Light 