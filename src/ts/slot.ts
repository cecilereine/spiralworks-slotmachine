import * as PIXI from 'pixi.js'


export const canvasWidthHeight = 512;
export const ICON_LIST = [
	'../resources/apple.png',
	'../resources/bananas.png',
	'../resources/chocolate.png',
	'../resources/french-fries.png',
	'../resources/bacon.png',	
	'../resources/hamburger.png',
	'../resources/broccoli.png',
	'../resources/eggplant.png',
	'../resources/milk.png',
	'../resources/onigiri.png',
];

let spinSpeed: number = 100;

export function getWinTextureIndex () : number {
	let rand = Math.floor(Math.random() * ICON_LIST.length);
	return rand;
}

export class Slot {
	private sprite = new PIXI.Sprite();

	private textureCounter: number = 0;

	private updateId = 0;

	private textureIndices : Array<number> = new Array(0);

	private updateTexture = () => {
		let min: number = 0;
		let max: number = ICON_LIST.length - 1;

		this.textureCounter = Math.floor(Math.random() * (max)) + min;
		
		this.sprite.texture = PIXI.loader.resources[ICON_LIST[this.textureCounter]].texture;
		//if(this.textureCounter === ICON_LIST.length) this.textureCounter = 0;
		
	}

	constructor(stage: PIXI.Container) {
		stage.addChild(this.sprite);

		this.sprite.width = 52;
		this.sprite.height = 52;

		this.sprite.anchor.set(0.5, 0.5);
	 	this.reset();

	 	this.textureIndices = new Array(ICON_LIST.length);

	 	this.populateTextureIndicies();

	 	this.updateTexture();		
	}

	public reset() {
		this.sprite.x = canvasWidthHeight / 2;
		this.sprite.y = canvasWidthHeight / 2;
	}

	public spinSlot() {
		this.updateId = setInterval(this.updateTexture, spinSpeed);		
	}	

	public stopSlot(textureIndex: number, correctIndex: number) {
		// -1 value sets slot to any random 
		clearInterval(this.updateId);	

		if(textureIndex < 0) {		
			this.updateTexture();
		}
		else {
			this.textureIndices.splice(correctIndex, 1);
			this.updateTextureManual(textureIndex);
		}
		
	}

	public updateSlotPosition(x: number, y: number) {
		this.sprite.x = x;
		this.sprite.y = y;
	}

	public getTextureCount():number {
		return this.textureCounter;
	}

	private updateTextureManual(textureIndex: number) {
		this.textureCounter = textureIndex;
		this.sprite.texture = PIXI.loader.resources[ICON_LIST[this.textureCounter]].texture;
	}	

	private populateTextureIndicies() {
		this.textureIndices.length = 0;
		for(let i = 0; i < ICON_LIST.length; i++) {
			this.textureIndices.push(i);
		}
	}

}