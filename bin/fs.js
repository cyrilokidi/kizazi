'use strict';
const kizazi = require('./index');
/**
 * Uses file system (instead of JSON Object) as tree.
 */
class fs extends kizazi {
  /**
   *
   * @param {String} tree Data.
   */
  constructor(tree) {
    super(tree);
    this.tree = tree;
  }

  get link() {
    return this.setLink();
  }

  // Value is file path.
  setLink() {
    return `${this.tree}/${this.original}/${this.parent.slice(1).join('/')}/${this.child}`;
  }
}

module.exports = fs;
