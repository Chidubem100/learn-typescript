"use strict";
class User {
    // the private and public keywords are used to mark items either for them to be accessible or not
    constructor(email, name) {
        this.city = "druks";
        this.email = email;
        this.name = name;
    }
}
class Admin {
    // the private and public keywords are used to mark items either for them to be accessible or not
    // this is another method of writing classes
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "druks";
    }
    deleteToken() {
        console.log("delete token");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should not be less than 1");
        }
        this._courseCount = courseNum;
    }
}
class subAdmin extends Admin {
    constructor() {
        super(...arguments);
        this.isFam = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const htsh = new User("htd@mail.com", "hrh");
