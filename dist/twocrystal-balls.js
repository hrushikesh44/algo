"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = two_crystal_balls;
function two_crystal_balls(breaks) {
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAmount;
    for (let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            console.log(i);
            return i;
        }
    }
    console.log("no breaking point");
    return -1;
}
