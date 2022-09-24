import React from 'react'

const CanvasRain = () => {
    const canvasRef = React.useRef(null);
    const rainAmount = 10;
    let tempRain = [];
    React.useEffect(()=>{
        // const canvas = canvasRef.current;
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        // let ctx = canvas.getContext('2d'); 
        // function Rain(){
        //     class Particle{
        //         constructor(xPos, yPos, speed){
        //             this.xPos = xPos;
        //             this.yPos = yPos;
        //             this.speed = speed;
        //         }

        //         draw(){
        //             ctx.beginPath();
        //             ctx.rotate(45 * Math.PI/180);
        //             ctx.fillStyle = 'white'; 
        //             ctx.rect(this.xPos, 0, 2, 45);
        //             ctx.fill();
        //             ctx.closePath();
        //             ctx.setTransform(1, 0, 0, 1, 0, 0);
        //         }

        //         update(){
        //             this.draw(ctx);
        //             this.yPos += 2;
        //             if(this.yPos> -(this.initial_y)){this.yPos=0;}
        //         }
        //     }

        //     let createRain = (Rain) =>{
        //         Rain.draw(ctx)
        //     }

        //     for(let i=0; i<rainAmount; i++){
        //         let xPos = (window.innerWidth/20) * i;
        //         let h = window.height * .25; 
        //         let yPos = 0 - h;
        //         let rain = new Particle(xPos, yPos, 10);
        //         tempRain.push(rain);
        //     }            

        //     for(let i=0; i<rainAmount; i++){
        //         createRain(tempRain[i]);
        //     }

        //     let updateRain = () =>{
        //         requestAnimationFrame(updateRain);
        //         ctx.clearRect(0,0 ,window.innerWidth, window.innerHeight);
        //         for(let i=0; i<rainAmount; i++){
        //             tempRain[i].update();
        //         }
        //     }

        //     updateRain();
        // }

        // Rain();
        const canvas = canvasRef.current;
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         let ctx = canvas.getContext('2d');
         ctx.globalAlpha = .65; 
        ctx.strokeStyle = 'white';
    ctx.lineWidth = .5;
    ctx.lineCap = 'round';
    
   let w = window.innerWidth;
   let h = window.innerHeight; 
    var init = [];
    var maxParts = 500;
    for(var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        l: 1 + Math.random() * 2,
        xs: -4 + Math.random() * 4,
        ys: Math.random() * 10 + 10
      })
    }
    
    var particles = [];
    for(var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }
    
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for(var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }
    
    function move() {
      for(var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if(p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }
    
    setInterval(draw, 30); 
    },[])
  
    return <canvas ref={canvasRef} className='absolute'/>
}

export default CanvasRain