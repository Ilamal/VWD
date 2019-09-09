const drops = [];
const dropAmount = 900;

let trees = [];
function main() {
  const canvas = initializeCanvas("canvasA", 600, 500);
  const params = generateRandomParameters();
  for (let i = 0; i < dropAmount; i++) {
    drops[i] = new Drop(canvas, params);
  }
  trees[0] = new Tree(canvas, [canvas.width/4, canvas.height/2-15], [canvas.width/4, canvas.height/2 - 70], 5,params.treeColor);
  
  trees[1] = new Tree(canvas, [canvas.width/2, canvas.height/2-45], [canvas.width/2, canvas.height/2 - 90], 5,params.treeColor);
  
  trees[2] = new Tree(canvas, [canvas.width*0.75, canvas.height/2+10], [canvas.width*0.75, canvas.height/2 - 50], 5,params.treeColor);
  const cloud = new Cloud(canvas, 100, 100);
  // Main Loop
  window.setInterval(() => {
   canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {      
      drops[i].fall();
      drops[i].show();
    }    
    for (const i in trees) {
      trees[i].show();
    }
    cloud.show();
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
        wind:(Math.random()-0.5),
        treeColor:getRandomColor()
    }
}
function getRandomColor(){
    var red=Math.round(Math.random()*255);
    var green=Math.round(Math.random()*255);
    var blue=Math.round(Math.random()*255);
    return "rgb("+red+","+green+","+blue+")"
}
