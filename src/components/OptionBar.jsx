import React from 'react'

const OptionBar = (props) => {
  let keypress = new Audio();
  
  const onPress = (e) =>{
    if(e==='clock'){props.setClock(props.clock==='true'?'false':'true'); localStorage.setItem('clock', props.clock==='true'?'false':'true')}
    else if(e==='vis'){props.setAudioVis(props.audioVis==='true'?'false':'true'); localStorage.setItem('audioVis', props.audioVis==='true'?'false':'true')}
    else if(e==='canvas'){props.setCanvas(props.canvas==='true'?'false':'true'); localStorage.setItem('canvas', props.canvas==='true'?'false':'true')}
    else if(e==='mode'){
      props.setMode(props.mode==='true'?'false':'true');
      props.setColor(props.color==='light'?'dark':'light')
      localStorage.setItem('mode', props.mode==='true'?'false':'true');
      localStorage.setItem('color', props.color==='light'?'dark':'light');
    }
    keypress.src = './assets/audios/keypress.mp3';
    keypress.volume = .5;
    keypress.play();
  }

  //<img src={`./assets/images/icons/${props.mode}headphones.png`} onClick={()=>onPress('music')} style={{top:'15%'}} alt='' className='optionIcon' />
  return (
    <div className='optionBar'>
      <img src={`./assets/images/icons/${props.color}clock.png`} onClick={()=>onPress('clock')} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.color}sound.png`} onClick={()=>onPress('vis')} style={{top:'7.5%'}} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.color}background.png`} onClick={()=>onPress('canvas')} style={{top:'15%'}} alt='' className='optionIcon' />
      <img src={`./assets/images/icons/${props.color}.png`} onClick={()=>onPress('mode')} style={{top:'22.5%'}} alt='' className='optionIcon' />
    </div>
  )
}

export default OptionBar