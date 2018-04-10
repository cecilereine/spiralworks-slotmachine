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
var canvasWidthHeight = 512;
exports.BOX_SPRITES = [
    '../../resources/chestclosed.png',
    '../../resources/chestopen.png'
];
var bg = new PIXI.Graphics();
var rewardBoxes = new Array(0);
var rewardBoxIndex;
var _text = new PIXI.Text("label", {
    fontFamily: 'Arial',
    fontSize: 24,
    fill: 0x000000, align: 'center'
});
function init() {
    bg.beginFill(0xFFFFFF);
    bg.lineStyle(5, 0xD3D3D3);
    bg.drawRect(56, 80, 400, 300);
    _text.text = "Choose your reward!";
    _text.anchor.set(0.5);
    _text.position.x = canvasWidthHeight / 2;
    _text.position.y = (canvasWidthHeight / 2) - 100;
    bg.addChild(_text);
    initRewardBoxes(bg);
    console.log("heyy");
    //registerEvents();
}
function initRewardBoxes(bg) {
    var xPos = (canvasWidthHeight / 2) - 130;
    var _loop_1 = function (i) {
        var temp = PIXI.Sprite.fromImage(exports.BOX_SPRITES[0]);
        temp.scale.set(0.3);
        temp.anchor.set(0.5, 0.5);
        temp.position.x = xPos;
        temp.position.y = canvasWidthHeight / 2;
        temp.interactive = true;
        temp.buttonMode = true;
        temp.on('pointerdown', function () { onClick(i); });
        rewardBoxes.push(temp);
        bg.addChild(temp);
        xPos += 120;
    };
    for (var i = 0; i < 3; i++) {
        _loop_1(i);
    }
}
function onClick(index) {
    console.log(index + " clicked");
    rewardBoxes[index].texture = PIXI.Texture.fromImage(exports.BOX_SPRITES[1]);
    setTimeout(function () { alertWin(index); }, 1000);
}
function alertWin(index) {
    var winningBox = Math.floor(Math.random() * rewardBoxes.length);
    if (winningBox == index) {
        alert('you win jackpot prize!');
    }
    else {
        alert('you win a prize!');
    }
    location.reload();
}
function renderBoxScreen(stage) {
    init();
    stage.addChild(bg);
}
exports.renderBoxScreen = renderBoxScreen;
