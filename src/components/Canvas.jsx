import React from 'react'

const Canvas = () => {
  const canvasRef = React.useRef(null);
  let linesLimit = 7;
  let tempLines = [];
  let linesColor = ['#E3A7BF', '#BAD5F0' , '#D6EFF6', '#FAE4CD', '#C2D5A8', '#F8D7E8'];
  React.useEffect(()=>{
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext('2d');
    function animationBackground(){
      class Lines{
        constructor(xPos, yPos, w, h, speed, color){
          this.xPos = xPos;
          this.yPos = yPos;
          this.initial_x = xPos;
          this.initial_y = yPos; 
          this.w = w;
          this.h = h;
          this.speed = speed;
          this.color = color;
        }

        draw (ctx){
          ctx.beginPath();
          ctx.rotate(45 * Math.PI/180);
          ctx.fillStyle = this.color
          ctx.rect(this.xPos, this.yPos, this.w, this.h);
          ctx.fill();
          ctx.closePath();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
        }

        update(){
          this.draw(ctx);
          this.yPos += this.speed * .8;
          if(this.yPos> -(this.initial_y)){this.yPos=this.initial_y;}
        }
      }

      let createLines = function(Lines){
        Lines.draw(ctx);
      }

      for(let i=1; i<linesLimit+1; i++){
        let w = window.innerWidth*.08;
        let h = window.innerHeight;
        let xPos = window.innerWidth - h/2.5- (window.innerWidth*(i * .1));
        let yPos =  window.innerHeight * -(1+linesLimit/i)/1.3; 
        let color = linesColor[Math.floor(Math.random() * linesColor.length)];
        let lines = new Lines(xPos, yPos, w, h, Math.floor(Math.random()*4+2), color);
        tempLines.push(lines);
      }

      for(let i=0; i<linesLimit; i++){
        createLines(tempLines[i]);
      }

      let updateLines = function(){
        requestAnimationFrame(updateLines);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(let i=0; i<linesLimit; i++){
          tempLines[i].update();
        }
      }

      updateLines();
    }

    animationBackground();
  },[])

  return <canvas ref={canvasRef} />
}

export default Canvas