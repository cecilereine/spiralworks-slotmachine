"use strict";
exports.__esModule = true;
var PIXI = require("pixi.js");
//var PIXI = require('pixi.js');
//console.log(PIXI);
// document.addEventListener('DOMContentLoaded', () => {
//     let renderer = PIXI.autoDetectRenderer(
//         600,
//         400,
//         {antialias: true, transparent: false, resolution: 1, backgroundColor: 0xFFFFFF}
//     );
// }, false);
// // alert('Hello World');
// var stage = new PIXI.Container();
// var renderer = PIXI.autoDetectRenderer(
// 	256,
// 	256,
// );
// var baconTexture = PIXI.Texture.fromImage("resources/reddit_icons_small.png");
// var r1c1 = new PIXI.Sprite(baconTexture);
// r1c1.position.x = 0;
// r1c1.position.y = 0;
// stage.addChild(r1c1);
// renderer.render(stage);
// const renderer = PIXI.autoDetectRenderer(512, 512);
// document.body.appendChild(renderer.view);
// const stage = new PIXI.Container();
var canvasWidthHeight = 512;
var ICON_LIST = [
    '../resources/apple.png',
    '../resources/bacon.png',
    '../resources/bananas.png',
];
var Slot = /** @class */ (function () {
    function Slot(stage) {
        var _this = this;
        this.sprite = new PIXI.Sprite();
        this.textureCounter = 0;
        this.updateTexture = function () {
            _this.sprite.texture = PIXI.loader.resources[ICON_LIST[_this.textureCounter++]].texture;
            if (_this.textureCounter === ICON_LIST.length)
                _this.textureCounter = 0;
        };
        stage.addChild(this.sprite);
        this.sprite.scale.x = 1;
        this.sprite.scale.y = 1;
        this.sprite.anchor.set(0, 0);
        this.reset();
        setInterval(this.updateTexture, 200);
    }
    Slot.prototype.reset = function () {
        this.sprite.x = canvasWidthHeight;
        this.sprite.y = canvasWidthHeight;
    };
    return Slot;
}());
var renderer = PIXI.autoDetectRenderer(canvasWidthHeight, canvasWidthHeight);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
PIXI.loader.add(ICON_LIST).load(setup);
var slot;
var button = document.querySelector('#start');
function setup() {
    slot = new Slot(stage);
    requestAnimationFrame(draw);
}
function draw() {
    renderer.render(stage);
    requestAnimationFrame(draw);
}
