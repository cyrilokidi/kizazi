'use strict';
const kizazi = require('./index');
/**
 * Uses Object instead of file system path.
 */
class object extends kizazi {
    /**
     * @param {Object} t Tree object.
     */
    constructor(t) {
        super(t);
        this.tree = t;
    }

    /**
     * Set value.
     */
    setLink() {
        let link = this.tree[this.getGeneration[0]];
        let tmp = this.getGeneration.slice(1);
        tmp.map(p => {
            link = link[p];
            tmp.slice(1);
        });
        return link;
    }
};

module.exports = object;