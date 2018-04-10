"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __importStar(require("pixi.js"));
var slot_js_1 = require("./slot.js");
var button_js_1 = require("./button.js");
var payout_js_1 = require("./payout.js");
var GAME_STATE;
(function (GAME_STATE) {
    GAME_STATE[GAME_STATE["IDLE"] = 0] = "IDLE";
    GAME_STATE[GAME_STATE["SPINNING"] = 1] = "SPINNING";
    GAME_STATE[GAME_STATE["GAME_WIN"] = 2] = "GAME_WIN";
    GAME_STATE[GAME_STATE["GAME_LOSE"] = 3] = "GAME_LOSE";
})(GAME_STATE || (GAME_STATE = {}));
var globalID;
var gameState;
PIXI.loader.add(slot_js_1.ICON_LIST).load(setup);
var renderer = PIXI.autoDetectRenderer(slot_js_1.canvasWidthHeight, slot_js_1.canvasWidthHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
var slots = new Array(0);
var button;
function setup() {
    gameState = GAME_STATE.IDLE;
    createGrid();
    button = new button_js_1.Button("SPIN", slot_js_1.canvasWidthHeight / 2, slot_js_1.canvasWidthHeight - 100, stage);
    button.button.on('pointerdown', onClick);
    requestAnimationFrame(draw);
}
function draw() {
    renderer.render(stage);
    globalID = requestAnimationFrame(draw);
}
function spinSlots() {
    for (var i = 0; i < slots.length; i++) {
        slots[i].spinSlot();
    }
}
function createGrid() {
    var xPos = (slot_js_1.canvasWidthHeight / 2) - 56;
    var yPos = (slot_js_1.canvasWidthHeight / 2) - 56;
    // build a grid per column
    for (var i = 0; i < 3; i++) {
        xPos = (slot_js_1.canvasWidthHeight / 2) - 56;
        for (var j = 0; j < 3; j++) {
            var slot = new slot_js_1.Slot(stage);
            slot.updateSlotPosition(xPos, yPos);
            slots.push(slot);
            xPos += 56;
        }
        yPos += 56;
    }
}
function stopSlots() {
    if (gameState == GAME_STATE.GAME_WIN) {
        var temp = payout_js_1.genRandPaylineIndex();
        var winIndex = slot_js_1.getWinTextureIndex();
        // stop slots via a win scenario 
        for (var i = 0; i < slots.length; i++) {
            if (payout_js_1.paylines[temp][i] == 1) {
                slots[i].stopSlot(winIndex, winIndex);
            }
            else {
                slots[i].stopSlot(-1, winIndex);
            }
        }
        setTimeout(function () { payout_js_1.triggerWinState(stage); }, 1000);
    }
    else if (gameState == GAME_STATE.GAME_LOSE) {
        for (var i = 0; i < slots.length; i++) {
            slots[i].stopSlot(-1, -1);
        }
        setTimeout(payout_js_1.triggerLoseState, 1000);
    }
}
function onClick() {
    if (gameState == GAME_STATE.IDLE) {
        spinSlots();
        console.log("CHANGE BUTTON TO STOP");
        button.disableButton();
        button = new button_js_1.Button("STOP", slot_js_1.canvasWidthHeight / 2, slot_js_1.canvasWidthHeight - 100, stage);
        button.button.on('pointerdown', onClick);
        gameState = GAME_STATE.SPINNING;
    }
    else if (gameState == GAME_STATE.SPINNING) {
        button.disableButton();
        if (payout_js_1.genWinScenario()) {
            gameState = GAME_STATE.GAME_WIN;
        }
        else {
            gameState = GAME_STATE.GAME_LOSE;
        }
        stopSlots();
    }
}
