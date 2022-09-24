import React from 'react'
import AudioVisualizer from './components/AudioVisualizer';
import Canvas from './components/Canvas';
import ChisatoLight from './components/ChisatoLight';
import Clock from './components/Clock';
import TakinaLight from './components/TakinaLight';


const Light = (props) => {
  const [character, setCharacter] = React.useState('Chisato');
  const [clock, setClock] = React.useState('black');
  //{props.audioVis?<AudioVisualizer/>:null}
  return (
    <div>
      {character==='Chisato'?<ChisatoLight setCharacter={setCharacter} setColor={props.setColor} />:
      <TakinaLight  setCharacter={setCharacter} setColor={props.setColor} setClock={setClock}/>}       
      {props.clock==='true'?<Clock mode={`${clock}`}/>:null}
      {props.canvas==='true'?<Canvas />:null}
      {props.audioVis==='true'?<AudioVisualizer/>:null}
    </div>
  )
}

export default Light 