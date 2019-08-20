'use strict';

class Kizazi {
    constructor(tree = {}) {
        this.tree = tree;
        this.gen = null;
    }

    get getTree() {
        return this.tree;
    }

    setTree(tree) {
        this.tree = tree;
        return this;
    }

    appendTree(tree) {
        Object.assign(this.tree, tree);
        return this;
    }

    generation(...gen) {
        this.gen = gen;
        return this;
    }

    appendGeneration(...gen) {
        this.gen = this.gen.concat(gen);
        return this;
    }

    get getGeneration() {
        return this.gen;
    }

    get original() {
        return this.gen[0];
    }

    get parent() {
        return this.gen.slice(0, -1);
    }

    get child() {
        return this.gen[this.gen.length - 1];
    }

    get link() {
        return this.setLink();
    }

    setLink() {
        let link = this.tree[this.original];
        this.parent.slice(1).map(p => {
            link = link[p];
            this.parent.slice(1);
        });
        return link[this.child];
    }
}

module.exports = Kizazi;