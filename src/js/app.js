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
PIXI.loader.add(slot_js_1.ICON_LIST).load(setup);
var renderer = PIXI.autoDetectRenderer(slot_js_1.canvasWidthHeight, slot_js_1.canvasWidthHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
var slots = new Array(0);
function setup() {
    var xPos = (slot_js_1.canvasWidthHeight / 2) - 56;
    var yPos = (slot_js_1.canvasWidthHeight / 2) - 56;
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
    requestAnimationFrame(draw);
}
function draw() {
    renderer.render(stage);
    requestAnimationFrame(draw);
}
