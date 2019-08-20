'use strict';
const kizazi = require('./index');

class fs extends kizazi {
    constructor(tree) {
        super(tree);
        this.tree = tree;
    }

    get link() {
        return this.setLink();
    }

    setLink() {
        let link = this.tree + this.original;
        this.parent.slice(1).map(p => link += '/' + p);
        return link + '/' + this.child;
    }
};

module.exports = fs;