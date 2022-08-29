import React from 'react'

const OptionBar = (props) => {
  let keypress = new Audio();
  const onPress = (e) =>{
    if(e==='clock'){props.setClock(!props.clock);}
    else if(e==='vis'){props.setAudioVis(!props.audioVis)}
    else if(e==='music'){props.setAudioPlayer(!props.audioPlay)}
    else if(e==='canvas'){props.setCanvas(!props.canvas)}
    else if(e==='mode'){props.setMode(props.mode==='light'?'dark':'light')};
    keypress.src = './assets/audios/keypress.mp3';
    keypress.volume = .5;
    keypress.play();
  }
  return (
    <div className='optionBar'>
      <img src={`./assets/images/icons/${props.mode}clock.png`} onClick={()=>onPress('clock')} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/sound.png`} onClick={()=>onPress('vis')} style={{top:'7.5%'}} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.mode}headphones.png`} onClick={()=>onPress('music')} style={{top:'15%'}} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.mode}background.png`} onClick={()=>onPress('canvas')} style={{top:'22.5%'}} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.mode}.png`} onClick={()=>onPress('mode')} style={{top:'30%'}} alt='' className='optionIcon' />
    </div>
  )
}

export default OptionBar