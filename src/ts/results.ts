import * as PIXI from 'pixi.js'

const canvasWidthHeight = 512;
export const BOX_SPRITES = [	
	'../../resources/chestclosed.png',
	'../../resources/chestopen.png'
];

let bg = new PIXI.Graphics();
let rewardBoxes : Array<PIXI.Sprite> = new Array(0);
let rewardBoxIndex : number;

let _text = new PIXI.Text("label", {
        fontFamily : 'Arial',
        fontSize: 24,
        fill : 0x000000, align : 'center'
    } );


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

function initRewardBoxes(bg: PIXI.Graphics) {
	let xPos = (canvasWidthHeight/2) - 130;
	for(let i = 0; i < 3; i++) {
		let temp = PIXI.Sprite.fromImage(BOX_SPRITES[0]);
		temp.scale.set(0.3);
		temp.anchor.set(0.5, 0.5);

		temp.position.x = xPos;
		temp.position.y = canvasWidthHeight / 2;

		temp.interactive = true;
		temp.buttonMode = true;

		temp.on('pointerdown', function() {onClick(i);} );


		rewardBoxes.push(temp);
		bg.addChild(temp);

		xPos += 120;
	}
}

function onClick(index: number) {
	console.log(index + " clicked");
	
	rewardBoxes[index].texture = PIXI.Texture.fromImage( BOX_SPRITES[1] );

	setTimeout(function() {alertWin(index);}, 1000);
}

function alertWin(index: number) {
	let winningBox = Math.floor(Math.random() * rewardBoxes.length);
	if(winningBox == index) {
		alert('you win jackpot prize!');
	}
	else {
		alert('you win a prize!');
	}
	location.reload();
}

export function renderBoxScreen(stage: PIXI.Container) {
	init();
	stage.addChild(bg);
}