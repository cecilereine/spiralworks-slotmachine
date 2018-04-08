import * as PIXI from 'pixi.js'


export const canvasWidthHeight = 512;
export const ICON_LIST = [
	'../resources/apple.png',
	'../resources/bananas.png',
	'../resources/chocolate.png',
	'../resources/french-fries.png',
	'../resources/bacon.png',	
	'../resources/hamburger.png'
];

let spinSpeed: number = 1000;

export class Slot {
	private sprite = new PIXI.Sprite();

	private textureCounter: number = 0;

	private updateTexture = () => {
		let min: number = 0;
		let max: number = ICON_LIST.length - 1;
		
		console.log((ICON_LIST.length));

		this.textureCounter = Math.floor(Math.random() * (max)) + min;

		
		this.sprite.texture = PIXI.loader.resources[ICON_LIST[this.textureCounter]].texture;
		//if(this.textureCounter === ICON_LIST.length) this.textureCounter = 0;
		
	}

	reset() {
		this.sprite.x = canvasWidthHeight / 2;
		this.sprite.y = canvasWidthHeight / 2;
	}

	spinSlot() {
		//this.updateInterval = setInterval(this.updateTexture, spinSpeed);
	}	

	updateSlotPosition(x: number, y: number) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

	public getTextureCount():number {
		return this.textureCounter;
	}

	constructor(stage: PIXI.Container) {
		stage.addChild(this.sprite);

		this.sprite.width = 52;
		this.sprite.height = 52;

		this.sprite.anchor.set(0.5, 0.5);
	 	this.reset();

	 	this.updateTexture();		
	}
}