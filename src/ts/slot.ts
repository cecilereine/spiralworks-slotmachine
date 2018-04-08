import * as PIXI from 'pixi.js'


export const canvasWidthHeight = 512;
export const ICON_LIST = [
	'../resources/apple.png',
	'../resources/bacon.png',
	'../resources/bananas.png',
	'../resources/chocolate.png',
	'../resources/french-fries.png',
	'../resources/hamburger.png'
];

export class Slot {
	private sprite = new PIXI.Sprite();

	private textureCounter: number = 0;

	private updateTexture = () => {
		let min: number = 1;
		let max: number = ICON_LIST.length;
		let lastRandom: number = 0;

		if(lastRandom === 0) {
			this.textureCounter = Math.floor(Math.random() * (max - min + 1)) + min;
		}
		else{
			this.textureCounter = Math.floor(Math.random() * (max - min)) + min;
			if (this.textureCounter >= lastRandom) this.textureCounter += 1;
		}

		//this.textureCounter = Math.floor(Math.random() * ICON_LIST.length);
		console.log(this.textureCounter);
		this.sprite.texture = PIXI.loader.resources[ICON_LIST[this.textureCounter]].texture;
		//if(this.textureCounter === ICON_LIST.length) this.textureCounter = 0;
		
	}

	reset() {
		this.sprite.x = canvasWidthHeight / 2;
		this.sprite.y = canvasWidthHeight / 2;
	}

	constructor(stage: PIXI.Container) {
		stage.addChild(this.sprite);

		this.sprite.scale.x = 0.5;
		this.sprite.scale.y = 0.5;

		this.sprite.anchor.set(0.5, 0.5);
		this.reset();

		setInterval(this.updateTexture, 200);
	}
}