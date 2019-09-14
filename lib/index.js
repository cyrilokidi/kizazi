'use strict';
class kizazi {
  /**
   * Initialize; root, path, labels
   * @param {String} root Root directory path
   * @param {String} path Currently selected path
   * @param {Object} labels Currently available labels
   */
  constructor(root = null, path = '', labels = {}) {
    this.r = root;
    this.p = path;
    this.lbl = labels;
  }

  /**
   * Set new root
   * @param {String} root
   */
  setRoot(root) {
    this.r = root;
    return this;
  }

  /**
   * Append current
   * @param {String} path
   */
  app(path) {
    this.p = this.p + path;
    return this;
  }

  /**
   * Set new label
   * @param {String} name Label name
   * @param {String} path Label path
   */
  setLabel(name, path) {
    this.lbl[name] = path;
    return this;
  }

  /**
   * Set multiple new labels
   * @param {Object} labelList New labels
   */
  setLabelMany(labels) {
    this.lbl = Object.assign(this.lbl, labels);
    return this;
  }

  /**
   * Select label
   * @param {String} name Label name
   */
  label(name) {
    this.p = this.lbl[name];
    return this;
  }

  /**
   * Get path to module
   */
  get mod() {
    return this.r + this.p;
  }
}

module.exports = kizazi;
