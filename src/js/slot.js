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
    '../resources/bananas.png',
    '../resources/chocolate.png',
    '../resources/french-fries.png',
    '../resources/bacon.png',
    '../resources/hamburger.png'
];
var spinSpeed = 100;
var Slot = /** @class */ (function () {
    function Slot(stage) {
        var _this = this;
        this.sprite = new PIXI.Sprite();
        this.textureCounter = 0;
        this.updateId = 0;
        this.updateTexture = function () {
            var min = 0;
            var max = exports.ICON_LIST.length - 1;
            _this.textureCounter = Math.floor(Math.random() * (max)) + min;
            _this.sprite.texture = PIXI.loader.resources[exports.ICON_LIST[_this.textureCounter]].texture;
            //if(this.textureCounter === ICON_LIST.length) this.textureCounter = 0;
        };
        stage.addChild(this.sprite);
        this.sprite.width = 52;
        this.sprite.height = 52;
        this.sprite.anchor.set(0.5, 0.5);
        this.reset();
        this.updateTexture();
    }
    Slot.prototype.reset = function () {
        this.sprite.x = exports.canvasWidthHeight / 2;
        this.sprite.y = exports.canvasWidthHeight / 2;
    };
    Slot.prototype.spinSlot = function () {
        console.log("i should spin!");
        this.updateId = setInterval(this.updateTexture, spinSpeed);
        //this.updateInterval = setInterval(this.updateTexture, spinSpeed);
    };
    Slot.prototype.stopSlot = function () {
        clearInterval(this.updateId);
    };
    Slot.prototype.updateSlotPosition = function (x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    };
    Slot.prototype.getTextureCount = function () {
        return this.textureCounter;
    };
    return Slot;
}());
exports.Slot = Slot;
