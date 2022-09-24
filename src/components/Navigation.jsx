import React from 'react'
import OptionBar from './OptionBar';

const Navigation = (props) => {
    const [activate, setActivate] = React.useState(false); 
    let keyPress = new Audio(); 
    const onActivate = () =>{
      setActivate(!activate);
      keyPress.src = './assets/audios/notes.mp3';
      keyPress.volume = .5;
      keyPress.play();
    }
    return (
    <div>
        {activate?<OptionBar color={props.color} setColor={props.setColor} mode={props.mode} setMode={props.setMode} clock={props.clock} setClock={props.setClock} canvas={props.canvas} setCanvas={props.setCanvas} audioPlay={props.audioPlay} setAudioPlayer={props.setAudioPlayer} audioVis={props.audioVis} setAudioVis={props.setAudioVis}/>:null}
        <img src={`./assets/images/icons/${props.color}setting.png`}
        width='5vh' height='5vh' className='navigation' onClick={onActivate} alt=''/>
    </div>
  )
}

export default Navigation