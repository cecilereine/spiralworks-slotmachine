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
// button.x = canvasWidthHeight / 2;
// button.y = canvasWidthHeight - 10;
var Button = /** @class */ (function () {
    // public _text = new PIXI.Text();
    function Button(label, xPos, yPos, stage) {
        this.button = new PIXI.Sprite();
        this.button = PIXI.Sprite.fromImage('../../resources/grey_button06.png');
        this.button.anchor.set(0.5);
        this.button.x = xPos;
        this.button.y = yPos;
        this.button.interactive = true;
        this.button.buttonMode = true;
        var _text = new PIXI.Text(label, {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0x000000, align: 'center'
        });
        _text.anchor.x = _text.anchor.y = 0.5;
        this.button.addChild(_text);
        stage.addChild(this.button);
    }
    return Button;
}());
exports.Button = Button;
