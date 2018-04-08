
import * as PIXI from 'pixi.js'

import {ICON_LIST, Slot, canvasWidthHeight} from "./slot.js";

PIXI.loader.add(ICON_LIST).load(setup);

const renderer = PIXI.autoDetectRenderer(canvasWidthHeight, canvasWidthHeight);
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();

let slots: Array<Slot> = new Array(0);

function setup() {

	let xPos = (canvasWidthHeight/2) - 56;
	let yPos = (canvasWidthHeight/2) - 56;
	for(let i = 0; i < 3; i++)
	{
		xPos = (canvasWidthHeight/2) - 56;
		for (let j = 0; j < 3; j++)
		{
			let slot = new Slot(stage);
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