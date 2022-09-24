import React from 'react'

const Clock = (props) => {
    const [hour, setHour] = React.useState('00');
    const [minute, setMinute] = React.useState('0');
    const [second, setSecond] = React.useState('');
    const [color, setColor] = React.useState('')
    React.useEffect(()=>{
        setInterval(() => {
            let currentTime = new Date();
            setHour(currentTime.getHours());
            setMinute(currentTime.getMinutes());
            setSecond(currentTime.getSeconds());
        }, 1000);
    },[]) 

    React.useEffect(()=>{
        setColor(props.mode);
    },[props.mode])
    return (
        <p className={`mainClock absolute text-9xl opacity-80`} style={{top:'77vh', left:'2vw', color:`${color}`}}>{hour + ':'} 
        { minute>9? minute: '0' + minute}
        <span className={`absolute text-3xl top-2/3 opacity-80`} style={{color:`${color}`}}>{ second>9? second: '0' + second}</span></p>
  )
}

export default Clock