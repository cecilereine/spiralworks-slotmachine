
import * as PIXI from 'pixi.js'

import {ICON_LIST, Slot, canvasWidthHeight} from "./slot.js";

PIXI.loader.add(ICON_LIST).load(setup);

let slot;

const renderer = PIXI.autoDetectRenderer(canvasWidthHeight, canvasWidthHeight);
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();

function setup(){
	slot = new Slot(stage);
	requestAnimationFrame(draw);
}

function draw() {
	renderer.render(stage);
	requestAnimationFrame(draw);
}