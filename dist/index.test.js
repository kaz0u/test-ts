"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe("foo bar", function () {
    test("foo", function () {
        expect(index_1.c).toBe("foo foo");
    });
    test("bar", function () {
        expect(index_1.addOne(45)).toBe(46);
    });
});
