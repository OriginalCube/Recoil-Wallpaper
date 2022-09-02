import React from 'react'

const CanvasRain = () => {
    const canvasRef = React.useRef(null);
    const rainAmount = 50;
    let tempRain = [];
    React.useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext('2d'); 
        function Rain(){
            class Particle{
                constructor(xPos, yPos, speed){
                    this.xPos = xPos;
                    this.yPos = yPos;
                    this.speed = speed;
                }

                draw(){
                    ctx.beginPath();
                    ctx.rotate(45 * Math.PI/180);
                    ctx.fillStyle = 'white'; 
                    ctx.rect(this.xPos, 0, 2, 45);
                    ctx.fill();
                    ctx.closePath();
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                }

                update(){
                    this.draw(ctx);
                    this.yPos += this.speed;
                    if(this.yPos> -(this.initial_y)){this.yPos=0;}
                }
            }

            let createRain = (Rain) =>{
                Rain.draw(ctx)
            }

            for(let i=0; i<rainAmount; i++){

            }            
        }


        
    },[])
  
    return <canvas ref={canvasRef}/>
}

export default CanvasRain