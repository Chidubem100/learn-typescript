"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: 'ddd', type: 4 });
function getSearchProduct(val) {
    // do some db operations
    const myIdex = 3;
    return val[myIdex];
}
const getMoreSearchProds = (val) => {
    // Do some db complex operations
    const dbIndex = 43;
    return val[dbIndex];
};
function prods(val, arg) {
    return {
        arg,
        val
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(prod) {
        this.cart.push(prod);
    }
}
