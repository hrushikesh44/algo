"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = binary_search;
function binary_search(haystack, needle) {
    let low = 0;
    let high = haystack.length;
    do {
        const medium = Math.floor(low + (high - low) / 2);
        let value = haystack[medium];
        if (value == needle) {
            console.log(true);
            return true;
        }
        else if (value > needle) {
            high = medium;
        }
        else {
            low = medium + 1;
        }
    } while (low < high);
    console.log(false);
    return false;
}
