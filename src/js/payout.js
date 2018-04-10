"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var results_js_1 = require("./results.js");
var winRate = 50; // win/lose at 50:50
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
    return random;
}
exports.genRandPaylineIndex = genRandPaylineIndex;
function genWinScenario() {
    var random = Math.floor(Math.random() * 100) + 1;
    if (random <= winRate) {
        return true;
    }
    else {
        return false;
    }
}
exports.genWinScenario = genWinScenario;
function triggerWinState(stage) {
    //stage.destroy(true);
    results_js_1.renderBoxScreen(stage);
    //stage = null;
}
exports.triggerWinState = triggerWinState;
function triggerLoseState() {
    alert('oops! try again!');
    location.reload();
}
exports.triggerLoseState = triggerLoseState;
