import React from 'react'

const Clock = () => {
    const [hour, setHour] = React.useState('00');
    const [minute, setMinute] = React.useState('0');
    const [second, setSecond] = React.useState('');
    React.useEffect(()=>{
        setInterval(() => {
            let currentTime = new Date();
            setHour(currentTime.getHours());
            setMinute(currentTime.getMinutes());
            setSecond(currentTime.getSeconds());
        }, 1000);
    },[]) 
    return (
        <p className='mainClock absolute text-8xl' style={{top:'40vh', left:'8vw'}}>{hour + ':'} 
        { minute>9? minute: '0' + minute}
        <span className='absolute text-2xl top-1/2'>{ second>9? second: '0' + second}</span></p>
  )
}

export default Clock