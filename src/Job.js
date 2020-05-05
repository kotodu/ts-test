"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Job = /** @class */ (function () {
    function Job(jobType) {
        var salarys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            salarys[_i - 1] = arguments[_i];
        }
        this.jobType = jobType;
        if (salarys.length === 0) {
            this.avgSalary = 0;
        }
        else {
            var sum_1 = 0;
            salarys.forEach(function (salary) {
                sum_1 += salary;
            });
            this.avgSalary = sum_1 / salarys.length;
        }
    }
    Job.prototype.getType = function () {
        return this.jobType.toString();
    };
    return Job;
}());
exports.Job = Job;
