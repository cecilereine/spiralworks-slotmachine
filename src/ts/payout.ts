import * as PIXI from 'pixi.js'
import {renderBoxScreen} from "./results.js";


let winRate:number = 50;	// win/lose at 50:50

let pattern = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

export let paylines = [ 
	[ 0, 1, 0, 0, 1, 0, 0, 1, 0 ],	// 1
	[ 1, 0, 0, 1, 0, 0, 1, 0, 0 ],  // 2
	[ 0, 0, 1, 0, 0, 1, 0, 0, 1 ],	// 3
	[ 1, 1, 1, 0, 0, 0, 0, 0, 0 ],	// 4
	[ 0, 0, 0, 1, 1, 1, 0, 0, 0 ],	// 5
	[ 0, 0, 0, 0, 0, 0, 1, 1, 1 ],	// 6
	[ 1, 0, 0, 0, 1, 0, 0, 0, 1 ], 	// 7
	[ 0, 0, 1, 0, 1, 0, 1, 0, 0 ]	// 8
];


export function genRandPaylineIndex() : number {
	let random = Math.floor(Math.random() * (paylines.length));
	return random;
}

export function genWinScenario() : boolean {
	let random = Math.floor(Math.random() * 100) + 1;

	if(random <= winRate) {
		return true;
	}
	else {
		return false;
	}
}


export function triggerWinState(stage : PIXI.Container) {
	//stage.destroy(true);
	renderBoxScreen(stage);
	//stage = null;
}


export function triggerLoseState() {
	alert('oops! try again!');
	location.reload();
}