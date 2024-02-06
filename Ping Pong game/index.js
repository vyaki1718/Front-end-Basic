document.addEventListener('DOMContentLoaded', ()=>{
    let table = document.getElementById('ping-pong-table')
    let ball = document.getElementById('ball'); 
    let paddle = document.getElementById('paddle');

    //ballX and ballY starting point of table w.r.t table
    let ballX = 50; // distance of the left of the ball w.r.t. ping pong table
    let ballY = 50; // distance of the top of the ball w.r.t. ping pong table
    
    ball.style.left = `${ballX}px`
    ball.style.top = `${ballY}px`

    let dx = 2; // displacement factor in x-direction 2 -> you will diplace by 2px in +x direction, -2 -> you will diplace by 2px in -x direction
    let dy = 2; //  displacement factor in y-direction 2 -> you will diplace by 2px in +y direction, -2 -> you will diplace by 2px in -y direction 
    setInterval(function exce(){
         ballX +=dx;
         ballY +=dy;
         ball.style.left = `${ballX}px`;
         ball.style.top = `${ballY}px`;

        //  if(ballX > 500-20 || ballX  <= 0)  dx *= -1;
        //  if(ballY > 300-20 || ballY <= 0) dy *= -1;

        if(ballX > table.offsetWidth-ball.offsetWidth || ballX <= 0){ dx *= -1}; // change x-direction
        if(ballY > table.offsetHeight-ball.offsetHeight || ballY <= 0){ dy *= -1}; // change y-dorection

    },1)
    
    let paddleY = 0;
    let dPy = 5;
    document.addEventListener('keydown', (event)=>{
        console.log(table.offsetHeight,paddleY)
       if(event.keyCode == 38 && paddleY > 0){
        //up arrow
        paddleY += (-1)*dPy;
       }else if(event.keyCode == 40 && paddleY < table.offsetHeight-paddle.offsetHeight){
        //down arrow
        paddleY += dPy;
       } 
       paddle.style.top = `${paddleY}px`;
    })
})