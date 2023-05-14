//functions
'this type of function uses the any keyword bcuzit does take any type of data which you inputs to it and its not a good practice';
'to write your function lke this';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2
    return "helo";
}
addTwo(3);
'this method checks the type of data to be inputed as an argument and if you input the wrong type then TS will alert you';
function addOne(num) {
    return num + 3;
}
addOne(7);
'this deals with defining the function string';
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('3');
'this deals with defining a function which takes in multiple datatypes and to avoid using the any keyword, you should define';
'they data types';
function signUpUser(name, email, password, isPaid) {
}
signUpUser('name', 'name@mail.com', 'nameMR23', false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser('name', 'bname@mail.com');
'this type of function returns more than one type of data type';
function myW(arg) {
    if (arg > 82) {
        return "hello";
    }
    return "200 ok";
}
'';
var getUser = function (s) {
    return 'hello';
};
'in this code now,you have to define the type of data that you want to return and even if you dont Ts will detect the different ';
' data there and return them';
var meals = ['egusi', 'ogbono', 'ede', 34, 4, false];
meals.map(function (meal) {
    return "meal include ".concat(meal);
});
