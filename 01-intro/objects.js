'';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "petitt",
    age: 23,
    isActive: false
};
function createUser(_a) {
    var string = _a.name, fasle = _a.isActive;
}
var newUser = { name: 'hello', isActive: true, email: 'h@h.com' };
createUser(newUser);
function createCourse() {
    return { CourseName: 'backend Nodejs', isPaid: true, num: 3 };
}
createCourse();
'type Aliases';
function getAUser(user) {
}
function getBuser(user) {
    return { name: 'lope', status: true, username: 'pwene' };
}
getBuser({ name: 'lope', status: true, username: 'pwene' });
getAUser({ name: 'hellop', status: false, username: 'heop' });
'readonly keyword makes sure that no one changes the value if the datatype';
var myUser = {
    _id: 'Ord323',
    Uname: 'kelz',
    email: 'kel@mail.com',
    isPaid: false,
    // creditCard: 23444332
};
myUser.Uname = 'kilio';
