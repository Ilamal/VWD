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
        // dir
    }
}