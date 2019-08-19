'use strict';
const _ = require('lodash');

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
        this.gen = _.concat(this.gen, gen);
        return this;
    }

    get getGeneration() {
        return this.gen;
    }

    get original() {
        return _.head(this.gen);
    }

    get parent() {
        return _.initial(this.gen);
    }

    get child() {
        return _.last(this.gen);
    }

    get link() {
        let link = this.tree[this.original];
        _.map(_.drop(this.parent), p => {
            link = link[p];
            _.drop(this.parent);
        });
        return link[this.child];
    }
}

module.exports = Kizazi;