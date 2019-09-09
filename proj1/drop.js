class Drop {
  constructor(canvas, params) {
    this.x = (Math.random() - 0.25) * (canvas.width * 3);
    this.y = (Math.random() - 1) * (canvas.height / 4);
    this.z = Math.random() * 20;
    this.len = 10 + this.z / 2;
    this.yspeed = this.z;
    this.wind = params.wind * this.z;
    this.canvas = canvas;
    this.params = params;
  }

  fall() {
    this.y = this.y + this.yspeed;
    const grav = Math.random() * this.z * 0.02;
    this.yspeed = this.yspeed + grav;
    this.x = this.x + this.wind;

    if (this.y > this.canvas.height) {
      this.y = (Math.random() - 1) * (this.canvas.height / 4);
      this.yspeed = this.z;
      this.x = (Math.random() - 0.25) * (this.canvas.width * 3);
    }
  }
  show() {
    const ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = this.z / 8;
    ctx.strokeStyle = this.params.rainColor;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.wind, this.y + this.len);
    ctx.fill();
    ctx.stroke();
  }
}
