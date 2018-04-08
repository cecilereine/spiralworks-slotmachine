"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
exports.paylines = [
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0] // 8
];
function genRandPaylineIndex() {
    var random = Math.floor(Math.random() * (exports.paylines.length));
    // console.log(random);
    // for(let i = 0; i < paylines[random].length; i++) {
    // 	console.log(i + " " + paylines[random][i]);
    // }
    return random;
}
exports.genRandPaylineIndex = genRandPaylineIndex;
