import React from 'react'

const AudioVisualDark = () => {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth/1.2;
        canvas.height = window.innerHeight/1.7;
        let ctx = canvas.getContext('2d');
        function wallpaperAudioListener(audioArray) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Render bars along the full width of the canvas
            var barWidth = Math.round(1.0 / 128.0 * canvas.width);
            var halfCount = audioArray.length / 2;
            // Begin with the left channel in red
            ctx.fillStyle = '#FFFFFF';
            // Iterate over the first 64 array elements (0 - 63) for the left channel audio data
            for (let i = 0; i < halfCount; ++i) {
                // Create an audio bar with its hight depending on the audio volume level of the current frequency
                var height = canvas.height * Math.min(audioArray[i], 1);
                ctx.globalAlpha = .7;
                ctx.fillRect(barWidth * i/.5, canvas.height - height, barWidth, height);
            }
        }
        // Register the audio listener provided by Wallpaper Engine.
        window.wallpaperRegisterAudioListener(wallpaperAudioListener)
    }, [])
    

  return <canvas className='audioVisualizerDark' ref={canvasRef}/>
  
}

export default AudioVisualDark