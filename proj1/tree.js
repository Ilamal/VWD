class Tree {
    constructor(canvas, begin, end, layers, color) {
        this.canvas = canvas;
        this.root = new Branch(canvas, begin, end, color);
        this.branches = [];
        this.branches.push(this.root);
        this.leaves = [];

        for (let i = 0; i < layers; i++) {
            for (const j in this.branches) {
                if (!this.branches[j].branched)
                    this.branches = this.branches.concat(this.branches[j].branchOut());
            }
        }
    }
    show() {
        for (const i in this.branches) {
            this.branches[i].show();
        }
    }
}