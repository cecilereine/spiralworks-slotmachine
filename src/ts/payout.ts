

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
	// console.log(random);
	// for(let i = 0; i < paylines[random].length; i++) {
	// 	console.log(i + " " + paylines[random][i]);
	// }
	return random;
}