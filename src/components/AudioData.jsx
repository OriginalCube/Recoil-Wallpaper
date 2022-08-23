import React from 'react'
import AudioPlayer from './AudioPlayer';

const AudioData = () => {
    const [enabled, setEnabled] = React.useState(false);
    return (
    <div>
        {!enabled?<div onClick={()=>setEnabled(!enabled)} 
        className='startButton absolute border-2'/>:<AudioPlayer/>} 
    </div>
)
}

export default AudioData