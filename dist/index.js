"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOne = exports.c = void 0;
var Abricot = "foo";
var baBa = "foo";
exports.c = "foo " + baBa;
console.log(Abricot, baBa, exports.c);
console.log("Un message un peu trop long. Un message un peu trop long. Un message un peu trop long.");
function addOne(i) {
    if (!Number.isNaN(i)) {
        return i + 1;
    }
    return i;
}
exports.addOne = addOne;
