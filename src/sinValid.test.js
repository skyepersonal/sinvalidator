"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinValid_1 = require("./sinValid");
describe('testing sinValid file', () => {
    test('sin length not equal to nine', () => {
        const sinTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect((0, sinValid_1.validator)(sinTest)).toBe(true);
    });
});
