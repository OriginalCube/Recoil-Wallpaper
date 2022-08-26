import React from 'react'
import AudioPlayer from './components/AudioPlayer';
import AudioVisualizer from './components/AudioVisualizer';
import Canvas from './components/Canvas';
import Clock from './components/Clock';
import Navigation from './components/Navigation';

const Main = () => {
  const [background, setBackground] = React.useState('chisato');
  const [audioReady, setAudioReady] = React.useState(true);
  const [hover, setHover] = React.useState(true);
  const [clock, setClock] = React.useState(false);
  const [canvas, setCanvas] = React.useState(true);
  const [audioVis, setAudioVis] = React.useState(true);
  const [audioPlay , setAudioPlayer] = React.useState(false); 
  let chisatoVoice = ['Ahoo', 'Dama', 'Neee', 'Wooo'] 
  let audioVoice = new Audio(); 
  const onHover = () =>{
    if(audioReady===true){
      setHover(false);
      audioVoice.src = `./assets/audios/${chisatoVoice[Math.floor(Math.random()*chisatoVoice.length)]}.mp3`
      audioVoice.volume = .5;
      audioVoice.play();
      setAudioReady(false);
    }
  }

  React.useEffect(()=>{
    if(audioReady===false){
      setTimeout(() => {
        setHover(true);
      }, 3000); 
      setTimeout(() => {
        setAudioReady(true);
      }, 4000);
    }
  },[audioReady])

  return (
    <div>
      {hover?<img className='absolute h-auto w-auto' 
      src={`./assets/images/${background}.png`} alt='chisato'/>:null}
      {hover?<div className='hoverMain absolute' onMouseEnter={onHover}></div> 
      :<img className='absolute h-auto w-auto'  src={`./assets/images/chisatoHover.png`} 
      alt=''/>} 
      <Navigation clock={clock} setClock={setClock} canvas={canvas} setCanvas={setCanvas} audioPlay={audioPlay} setAudioPlayer={setAudioPlayer} audioVis={audioVis} setAudioVis={setAudioVis}/>  
      {clock?<Clock />:null}
      {canvas?<Canvas />:null}
      {audioPlay?<AudioPlayer />:null}
      {audioVis?null:null}
    </div>
  )
}

export default Main