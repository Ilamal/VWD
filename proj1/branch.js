class Branch {
  constructor(canvas, begin, end, color) {
    this.canvas = canvas;
    this.begin = begin;
    this.end = end;
    this.color = color;
    this.branched = false;
  }
  show() {
    const ctx = this.canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.begin[0], this.begin[1]);
    ctx.lineTo(this.end[0], this.end[1]);
    ctx.fill();
    ctx.stroke();
  }
  branchOut() {
    let leftDir = this.subtractVectors(this.end, this.begin);
    leftDir = this.multiplyVectors(this.rotateVector(leftDir, 45), 0.7);
    const leftEnd = this.addVectors(this.end, leftDir);
    
    let rightDir = this.subtractVectors(this.end, this.begin);
    rightDir = this.multiplyVectors(this.rotateVector(rightDir, 315), 0.7);
    const rightEnd = this.addVectors(this.end, rightDir);

    this.branched = true;
    return [new Branch(this.canvas, this.end, leftEnd), new Branch(this.canvas, this.end, rightEnd)];
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
    multiplyVectors(v1,mult){
      var newV=[
          v1[0]*mult,
          v1[1]*mult
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
