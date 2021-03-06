import * as PIXI from 'pixi.js'

import {ICON_LIST, Slot, canvasWidthHeight, 
	getWinTextureIndex} from "./slot.js";
import {Button} from "./button.js";
import {paylines, genRandPaylineIndex, 
	genWinScenario, triggerWinState,
	triggerLoseState} from "./payout.js";


enum GAME_STATE {
	IDLE,
	SPINNING,
	GAME_WIN,
	GAME_LOSE,
}

let globalID;

let gameState: GAME_STATE;

PIXI.loader.add(ICON_LIST).load(setup);

const renderer = PIXI.autoDetectRenderer(canvasWidthHeight, canvasWidthHeight);
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();

let slots: Array<Slot> = new Array(0);
let button: Button;

function setup() {
	gameState = GAME_STATE.IDLE;

	createGrid();

	button = new Button("SPIN", canvasWidthHeight / 2, canvasWidthHeight - 100, stage);
	button.button.on('pointerdown', onClick);
	requestAnimationFrame(draw);
}

function draw() {
	renderer.render(stage);
	globalID = requestAnimationFrame(draw);
}

function spinSlots() {
	for(let i = 0; i < slots.length; i++) {
		slots[i].spinSlot();
	}
}

function createGrid() {
	let xPos = (canvasWidthHeight/2) - 56;
	let yPos = (canvasWidthHeight/2) - 56;

	// build a grid per column
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
}

function stopSlots() {
	if(gameState == GAME_STATE.GAME_WIN) {
		let temp = genRandPaylineIndex();
		let winIndex = getWinTextureIndex();

		// stop slots via a win scenario 
		for(let i = 0; i < slots.length; i++) {
			if(paylines[temp][i] == 1) {
				slots[i].stopSlot(winIndex, winIndex);
			} else {
				slots[i].stopSlot(-1, winIndex);				
			}		
		}		

		setTimeout(function() {triggerWinState(stage);}, 1000); 
	}
	else if(gameState == GAME_STATE.GAME_LOSE) {
		for(let i = 0; i < slots.length; i++) {
			slots[i].stopSlot(-1, -1);
		}		
		setTimeout(triggerLoseState, 1000);
	}
}

function onClick() {
	if(gameState == GAME_STATE.IDLE) {
		spinSlots();
		console.log("CHANGE BUTTON TO STOP");

		button.disableButton();

		button = new Button("STOP", canvasWidthHeight / 2, canvasWidthHeight - 100, stage);
		button.button.on('pointerdown', onClick);

		gameState = GAME_STATE.SPINNING;
	}
	else if(gameState == GAME_STATE.SPINNING) {
		button.disableButton();
		
		if(genWinScenario()) {
			gameState = GAME_STATE.GAME_WIN;
		}
		else {
			gameState = GAME_STATE.GAME_LOSE;
		}	

		stopSlots();
	}
}