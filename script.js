// SETUP CODE - DO NOT TOUCH
import T from './turtle.js'
import { drawA, drawL } from './examples.js'

// Default settings
T.setup({ canvas: 'canvas' })


// Setup user interaction
// The "start" function runs when the user clicks the "Run code" button and when the web page is loaded
document.querySelector('#btn-run').addEventListener('click', start)
document.querySelector('#btn-clear').addEventListener('click', clear)
start()

function clear() {
	console.log('Cleared canvas')
	T.eraseAll()
}
// END OF SETUP CODE
// -------------------------------------------------------- //
// Do whatever you want below here!



function start() {
	// Övningar
	console.log('script.js | Övningar')
	T.setPenColor('#469A24')
	T.setPenSize(5)
	T.penUp()

	const dashLength = 20
	const spacing = 10
	T.pointInDirection(50)
	T.penDown()
	T.move(dashLength)
	T.penUp()
	T.move(spacing)
	T.penDown()
	T.move(dashLength)
	T.penUp()
	T.move(spacing)
	T.penDown()
	T.move(dashLength)
	/*
	// 1.2 square
	let squareLength = 80
	let turnAngle = 90
	T.goTo(0, 0)
	T.penDown()
	T.pointInDirection(45)
	T.move(squareLength)
	T.turn(turnAngle)
	T.move(squareLength)
	T.turn(turnAngle)
	T.move(squareLength)
	T.turn(turnAngle)
	T.move(squareLength)
	*/

	/*T.goTo(-90, 20)

	drawL()
	drawA()
	drawA()
	drawL()

	T.goTo(-92, 30)
	T.penDown()
	// T.setPenColor('lightgreen')
	T.setPenColor('darkgreen')
	T.pointInDirection(90)
	T.move(160)
	// T.turn(45)
	// T.move(40)
	*/
}
