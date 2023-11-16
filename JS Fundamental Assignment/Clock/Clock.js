const body = document.querySelector('body')
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';
body.style.margin = '0';
body.style.backgroundColor = '#191725'

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const cwidth = canvas.width = 550;
const cheight = canvas.height = 550;
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawHand(x, y, angle, length, width, color) {
    const radians = (angle - 90) * (Math.PI / 180);
    const endX = x + length * Math.cos(radians);
    const endY = y + length * Math.sin(radians);

    context.beginPath();
    context.lineWidth = width;
    context.strokeStyle = color;
    context.moveTo(x, y);
    context.lineTo(endX, endY);
    context.stroke();
}
function drawClock(){
    context.clearRect(0,0,cwidth,cheight);


    context.shadowBlur = 25; // Adjust the blur level for a more prominent shadow
    context.shadowColor = 'rgb(163, 118, 167)'; // Shadow color (semi-transparent black)
    context.shadowOffsetX = 3; // Adjust the horizontal offset
    context.shadowOffsetY = 3; // Adjust the vertical offset

    context.beginPath();
    context.arc(centerX, centerY, 140, 0, 2 * Math.PI);
    context.stroke();


    
    const date = new Date();
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.toLocaleString('en',{month: 'short'});
    const dayOfWeek = date.toLocaleString('en',{weekday: 'long'});

    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;

    context.font = '40px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';  
    context.fillText(`${hours}:${formattedMinutes}`, centerX, centerY + 210);
    context.font = '20px Arial';
    context.fillStyle = '#898A98'
    context.fillText(`${dayOfWeek.toUpperCase()}, ${month.toUpperCase()} ${day}`, centerX,centerY+ 250);

    const hourDeq = (hours + minutes/60)*(360/12);
    drawHand(centerX, centerY, hourDeq, 60, 4, '#faf7f1');
    const minuteDeq = (minutes + seconds/60) * (360/60);
    drawHand(centerX, centerY, minuteDeq, 110, 4, '#faf7f1');
    const secondDeq = seconds *(360/60);
    drawHand(centerX, centerY, secondDeq, 120, 4,'#a376a7');

    context.beginPath();
    context.arc(centerX, centerY, 5, 0, 2*Math.PI);
    context.fillStyle = 'white';
    context.fill();
    requestAnimationFrame(drawClock);
}
drawClock();
