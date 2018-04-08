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
exports.canvasWidthHeight = 512;
exports.ICON_LIST = [
    '../resources/apple.png',
    '../resources/bacon.png',
    '../resources/bananas.png',
    '../resources/chocolate.png',
    '../resources/french-fries.png',
    '../resources/hamburger.png'
];
var Slot = /** @class */ (function () {
    function Slot(stage) {
        var _this = this;
        this.sprite = new PIXI.Sprite();
        this.textureCounter = 0;
        this.updateTexture = function () {
            var min = 1;
            var max = exports.ICON_LIST.length;
            var lastRandom = 0;
            if (lastRandom === 0) {
                _this.textureCounter = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            else {
                _this.textureCounter = Math.floor(Math.random() * (max - min)) + min;
                if (_this.textureCounter >= lastRandom)
                    _this.textureCounter += 1;
            }
            //this.textureCounter = Math.floor(Math.random() * ICON_LIST.length);
            console.log(_this.textureCounter);
            _this.sprite.texture = PIXI.loader.resources[exports.ICON_LIST[_this.textureCounter]].texture;
            //if(this.textureCounter === ICON_LIST.length) this.textureCounter = 0;
        };
        stage.addChild(this.sprite);
        this.sprite.scale.x = 0.5;
        this.sprite.scale.y = 0.5;
        this.sprite.anchor.set(0.5, 0.5);
        this.reset();
        setInterval(this.updateTexture, 200);
    }
    Slot.prototype.reset = function () {
        this.sprite.x = exports.canvasWidthHeight / 2;
        this.sprite.y = exports.canvasWidthHeight / 2;
    };
    return Slot;
}());
exports.Slot = Slot;
