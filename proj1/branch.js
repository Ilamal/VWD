class Branch {
  constructor(canvas, begin, end) {
    this.canvas = canvas;
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }
  show() {
    const ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(this.begin.x, this.begin.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.fill();
    ctx.stroke();
  }
  branchOut() {
    let leftDir = this.subtractVectors(this.end, this.begin);
    leftDir = this.rotateVector(leftDir, PI / 6);
    const end = this.addVectors(this.end, leftDir);
    return new Branch(this.canvas, this.end, end);
  }
  subtractVectors(v1, v2) {
    var newV = [v1[0] - v2[0], v1[1] - v2[1]];
    return newV;
  }
  addVectors(v1,v2){
    var newV=[
        v1[0]+v2[0],
        v1[1]+v2[1]
    ];
    return newV;
    }
  rotateVector(vec, ang) {
    ang = -ang * (Math.PI / 180);
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    return new Array(
      Math.round(10000 * (vec[0] * cos - vec[1] * sin)) / 10000,
      Math.round(10000 * (vec[0] * sin + vec[1] * cos)) / 10000
    );
  }
}
