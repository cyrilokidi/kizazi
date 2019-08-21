"use strict";
/**
 * A simple mapping library.
 */
class Kizazi {
    /**
     * @param {Object} tree Data.
     */
    constructor(tree) {
        this.tree = tree;
        this.gen = [];
        this.lbl = {};
    }

    // Current tree Object (or directory root).
    get getTree() {
        return this.tree;
    }

    /**
     * Set new tree.
     * @param {Object} tree New tree.
     */
    setTree(tree) {
        this.tree = tree;
        return this;
    }

    /**
     * Append tree to existing tree.
     * @param {Object} tree Tree extension.
     */
    appendTree(tree) {
        Object.assign(this.tree, tree);
        return this;
    }

    // Current generation.
    get getGeneration() {
        return this.gen;
    }

    /**
     * Set generation.
     * @param  {...String} gen Generation.
     */
    generation(...gen) {
        this.gen = gen.flat();
        return this;
    }

    /**
     * Append generation to existing generation.
     * @param  {...String} gen Generation extension.
     */
    appendGeneration(...gen) {
        this.gen = this.gen.concat(gen.flat());
        return this;
    }

    /**
     * Use label.
     * @param {String} name Label.
     */
    label(label) {
        this.gen = this.lbl[label];
        return this;
    }

    /**
     * Set label.
     * @param  {...String} lbl Name, ...generation
     */
    setLabel(...lbl) {
        let tmp = lbl.flat();
        this.lbl[tmp[0]] = tmp.slice(1);
        return this;
    }

    /**
     * Append label to existing label.
     * @param  {...String} lbl Generation extension.
     */
    appendLabel(target, value) {
        this.lbl[target] = this.lbl[target].concat(this.lbl[value]);
        return this;
    }

    // Original.
    get original() {
        return this.gen[0];
    }

    // Parent.
    get parent() {
        return this.gen.slice(0, -1);
    }

    // Child.
    get child() {
        return this.gen[this.gen.length - 1];
    }

    get link() {
        return this.setLink();
    }

    // Set link (value).
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