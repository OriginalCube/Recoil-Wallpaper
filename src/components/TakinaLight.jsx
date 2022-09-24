import React from 'react'

const TakinaLight = (props) => {
    const audioVoice = React.useRef(new Audio());
    const [hover, setHover] = React.useState(true);
    const [audioReady, setAudioReady] = React.useState(true);
    const [error, setError] = React.useState(false);
    let chisatoVoice = ['Ahoo', 'Dama', 'Neee', 'Wooo'] 

    const onHover = () =>{
    setError(false);
    setHover(false);
    if(audioReady===true){
      audioVoice.current.src = `./assets/audios/${chisatoVoice[Math.floor(Math.random()*chisatoVoice.length)]}.mp3`
      audioVoice.current.volume = .5;
      audioVoice.current.play().catch(()=>{
        setTimeout(() => {setHover(true)}, 3000);
        setError(true);
      }); 
    }
    error?setTimeout(() => {setAudioReady(true)}, 500):setAudioReady(false);
    }

    React.useEffect(()=>{
      props.setClock('white');
    },[])
    return (
    <div>
        <video className='absolute w-auto h-auto' autoPlay loop muted> 
        <source src='./assets/videos/takina.webm' type='video/webm'></source></video> 
    </div>
  )
}

export default TakinaLight