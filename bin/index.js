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
        this.labelName = null;
        this.labelList = {};
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
        return this.labelName ? this.labelList[this.labelName] : this.gen;
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
    label(name) {
        this.labelName = name;
        return this;
    }

    /**
     * Set label.
     * @param  {...String} lbl Name, ...generation
     */
    setLabel(...label) {
        let tmp = label.flat();
        this.labelList[tmp[0]] = tmp.slice(1);
        return this;
    }

    /**
     * Append label to existing label.
     * @param  {...String} lbl Generation extension.
     */
    appendLabel(name) {
        this.labelList[this.labelName] = this.labelList[this.labelName].concat(this.labelList[name]);
        return this;
    }

    // Original.
    get original() {
        return this.getGeneration[0];
    }

    // Parent.
    get parent() {
        return this.getGeneration.slice(0, -1);
    }

    // Child.
    get child() {
        return this.getGeneration[this.getGeneration.length - 1];
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