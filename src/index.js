"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Job_1 = require("./Job");
var user = new User_1.User("山田", "太郎", 22, (new Job_1.Job("学生")));
var contentsElement = document.getElementById("contents");
if (!!contentsElement) {
    contentsElement.innerText = "私は" + user.getFullName() + "で年齢は" + user.getAge() + "歳、職業は" + user.job.getType() + "、月収は" + user.job.avgSalary + "です";
}
