const drops = [];
const dropAmount = 900;
function main() {
  const canvas = initializeCanvas("canvasA", 600, 500);
  const params = generateRandomParameters();
  for (let i = 0; i < dropAmount; i++) {
    drops[i] = new Drop(canvas, params);
  }
  // Main Loop
  window.setInterval(() => {
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {      
      drops[i].fall();
      drops[i].show();
    }    
  }, 50);
}

function initializeCanvas(canvasID, width, height) {
  const c = document.getElementById(canvasID);
  const ctx = c.getContext("2d");
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  return c;
}

function generateRandomParameters(){
    return {
        rainColor:getRandomColor(),
        wind:(Math.random()-0.5)
    }
}
function getRandomColor(){
    var red=Math.round(Math.random()*255);
    var green=Math.round(Math.random()*255);
    var blue=Math.round(Math.random()*255);
    return "rgb("+red+","+green+","+blue+")"
}
