"use strict";
function detectType(val) {
    if (val === 'string') {
        return val.toLocaleLowerCase();
    }
    return val;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide id');
        return;
    }
    id.toLocaleLowerCase();
}
function printStr(str) {
    if (str) {
        if (typeof str === 'object') {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === 'string') {
            console.log(str);
        }
    }
}
function isAdminAcc(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logT(val) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
    }
    else {
        console.log(val.toUpperCase());
    }
}
function isFish(val) {
    return val.swim !== undefined;
}
function getFood(val) {
    if (isFish(val)) {
        val;
        return "fish food";
    }
    else {
        val;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
