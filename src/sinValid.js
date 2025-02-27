"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const multiplierVal = [1, 2, 1, 2, 1, 2, 1, 2, 1];
const validator = (sin) => {
    let valid = true;
    let sum = 0;
    if (sin.length != 9) {
        valid = false;
    }
    else {
        for (let i = 0; i < 9; i++) {
            let tempSum = sin[i] * multiplierVal[i];
            if (tempSum <= 9) {
                sum += tempSum;
            }
            else {
                sum += tempSum % 10 + Math.trunc(tempSum / 10);
            }
        }
        if (sum % 10 != 0) {
            valid = false;
        }
    }
    let sinStr = '';
    for (let i in sin) {
        sinStr += sin[i] + "";
    }
    return valid;
};
exports.validator = validator;
const sinTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(0, exports.validator)(sinTest);
