'use strict';
/**
 * A simple mapping library.
 */
class Kizazi {
  /**
   * @param {*} t Path directory.
   */
  constructor(t) {
    this.tree = t;
    this.gen = [];
    this.labelName = null;
    this.labelList = {};
  }

  /**
   * Current tree.
   */
  get getTree() {
    return this.tree;
  }

  /**
   * Set new tree
   * @param {*} t New tree.
   */
  setTree(t) {
    this.tree = t;
    return this;
  }

  /**
   * Set new generation
   * @param  {...String} args New generation.
   */
  generation(...args) {
    this.gen = args.flat();
    return this;
  }

  /**
   * Append generation to current generation.
   * @param  {...String} args Generation extension.
   */
  append(...args) {
    this.gen = this.gen.concat(args.flat());
    return this;
  }

  /**
   * Current generation.
   */
  get getGeneration() {
    return this.gen;
  }

  /**
   * Set label.
   * @param  {...String} args Name, [...generation]
   */
  setLabel(...args) {
    let tmp = args.flat();
    this.labelList[tmp[0]] = tmp.slice(1);
    return this;
  }

  /**
   * Set multiple labels.
   * @param {Object} obj Labels as object.
   */
  setLabelMany(obj) {
    this.labelList = Object.assign(this.labelList, obj);
    return this;
  }

  /**
   * Get current label(s).
   * @param {String} name
   */
  getLabelList(name = null) {
    return name ? this.labelList[name] : this.labelList;
  }

  /**
   * Merge two labels.
   * @param {String} first First part.
   * @param {String} last Last part
   */
  merge(first, last) {
    this.labelList[first] = this.labelList[first].concat(this.labelList[last]);
    return this;
  }

  /**
   * Use label.
   * @param {String} name Label name.
   */
  label(name) {
    this.gen = this.labelList[name];
    return this;
  }

  /**
   * Current value.
   */
  get link() {
    return this.setLink();
  }

  /**
   * Set value.
   */
  setLink() {
    return `${this.tree}/${this.getGeneration.join('/')}`;
  }
}

module.exports = Kizazi;
