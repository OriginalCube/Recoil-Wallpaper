import React from 'react'

const OptionBar = (props) => {
  let keypress = new Audio();
  const onPress = (e) =>{
    if(e==='clock'){props.setClock(!props.clock);}
    keypress.src = './assets/audios/keypress.mp3';
    keypress.volume = .5;
    keypress.play();
  }
  return (
    <div className='optionBar'>
      <img src='./assets/images/icons/clock.png' onClick={()=>onPress('clock')} alt='' className='optionIcon' />
      <img src='./assets/images/icons/sound.png' style={{top:'7.5%'}} alt='' className='optionIcon' />
      <img src='./assets/images/icons/headphones.png' style={{top:'15%'}} alt='' className='optionIcon' />
      <img src='./assets/images/icons/background.png' style={{top:'22.5%'}} alt='' className='optionIcon' />
    </div>
  )
}

export default OptionBar