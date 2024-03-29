class Cloud {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
    }
    show() {
        const context = this.canvas.getContext("2d");
        const startX = this.x;
        const startY = this.y;
        context.globalCompositeOperation='destination-over';
        // draw cloud shape
        context.beginPath();
        context.moveTo(startX, startY);
        context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
        context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
        context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
        context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
        context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
        context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
        context.closePath();
        
        // add a radial gradient
        var grdCenterX = 260;
        var grdCenterY = 80;
        var grd = context.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
        grd.addColorStop(0, "#8ED6FF"); // light blue
        grd.addColorStop(1, "#004CB3"); // dark blue
        context.fillStyle = grd;
        context.fill();
        
        // set the line width and stroke color
        context.lineWidth = 5;
        context.strokeStyle = "#0000ff";
        context.stroke();
        this.x++;
    }
}