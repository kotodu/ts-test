"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(familyName, givenName, age, job) {
        this.familyName = familyName;
        this.givenName = givenName;
        this.age = age;
        this.job = job;
    }
    /**
     * getFullName
     */
    User.prototype.getFullName = function () {
        return this.familyName + this.givenName;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
exports.User = User;
