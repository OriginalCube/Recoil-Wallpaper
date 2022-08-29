import React from 'react'
import Dark from './Dark';
import Light from './Light';
import Navigation from './components/Navigation';

const Main = () => {
  const [mode, setMode] = React.useState('light');
  const [clock, setClock] = React.useState(false);
  const [canvas, setCanvas] = React.useState(true);
  const [audioVis, setAudioVis] = React.useState(true);
  const [audioPlay , setAudioPlayer] = React.useState(false); 
  return (
    <div>
      {mode==='light'?<Light clock={clock} canvas={canvas} audioVis={audioVis} audioPlay={audioPlay}/>
      :<Dark />}
      <Navigation mode={mode} setMode={setMode} clock={clock} setClock={setClock} canvas={canvas} setCanvas={setCanvas} audioPlay={audioPlay} setAudioPlayer={setAudioPlayer} audioVis={audioVis} setAudioVis={setAudioVis}/>  
   </div>
  )
}

export default Main