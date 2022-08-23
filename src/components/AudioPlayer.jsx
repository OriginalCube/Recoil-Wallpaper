import React from 'react'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [trackProgress, setTrackProgress] = React.useState(0);
  const [volume, setVolume] = React.useState(0);
  //ref
  const intervalRef = React.useRef();
  const audioRef = React.useRef(new Audio());
  const isReady = React.useRef(true);
  const { duration } = audioRef.current;

  const lessVolume = () =>{
    if(volume-.1>0){
      setVolume(Math.round((volume-.1)*10)/10);
      audioRef.current.volume = volume;
    }else{
      setVolume(0);
      audioRef.current.volume = volume;
    }
  }

  const addVolume = () =>{
    console.log(volume)
    if(volume>=0 && volume+.1<=1){
      setVolume(volume+.1);
      audioRef.current.volume = volume;
    }
  }

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        //skip
    } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    setIsPlaying(false);
    startTimer();
  };

  const playButton = () =>{
    setIsPlaying(false);
    audioRef.current.play();
  }

  const pauseButton = () =>{
    setIsPlaying(true);
    audioRef.current.pause();
  }

  React.useEffect(()=>{
    audioRef.current.pause();
    audioRef.current = new Audio('./assets/audios/songs/ed.mp3');
    audioRef.current.volume = .5;
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
    console.log('Hello World');    
    setIsPlaying(audioRef.isPlaying);
  },[])

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.pause();
      startTimer();
    }else{
      audioRef.current.play();
    }
  }, [isPlaying]);

  React.useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='audioPlayer'>
        <input 
            type='range'
            step='1'
            min='1'
            value={trackProgress}
            max={duration?duration : `${duration}`}
            className='audioProgress'  
            onChange={(e)=>{onScrub(e.target.value)}}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
        /> 
        <div className='playerContainer'>
            <img className='playerIcon' src='./assets/images/icons/right.png' alt=''/>
            {!isPlaying?<img className='playerIcon' onClick={pauseButton} src='./assets/images/icons/pause.png' alt=''/>:
            <img onClick={playButton} className='playerIcon' src='./assets/images/icons/play.png' alt=''/>}
            <img className='playerIcon' src='./assets/images/icons/right.png' alt=''/>
        </div>
    </div>
  )
}

export default AudioPlayer