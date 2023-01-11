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
	T.setPenSize(2)

	exercise_2_1b()
	// exercise_2_1()
	// exercise_1_4()
	// exercise_1_3()
	// exercise_1_2()


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

function exercise_2_1b() {
	T.goTo(-100, 100)
	T.pointInDirection(45)
	T.penDown()
	T.setPenColor('purple')

	console.log('1')
	// definiera variabel; villkor; ändra variabel
	for( let count=0; count < 10; count = count + 1 ) {
		console.log('2')
		T.move(10)
		T.penUp()
		T.move(10)
		T.penDown()
	}
	console.log('3')
}
function exercise_2_1() {
	console.log('exercise_2_1  1')
	T.penDown()
	T.setPenColor('green')

	let count = 0
	console.log('exercise_2_1  2')
	while( count < 10 ) {
		console.log('exercise_2_1  3')
		T.move(15)
		T.turn(5)
		count = count + 1
	}
	console.log('exercise_2_1  4')
}

function exercise_1_2() {
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
}
function exercise_1_3() {
	// 1.3
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
}

function exercise_1_4() {
	const side = 48
	const pointyTurn = 180 - 36
	const bluntTurn = -72
	T.penDown()
	T.pointInDirection(90)
	T.move(side)
	T.turn(pointyTurn)
	T.move(side)
	T.turn(bluntTurn)

	T.move(side)
	T.turn(pointyTurn)
	T.move(side)
	T.turn(bluntTurn)

	T.move(side)
	T.turn(pointyTurn)
	T.move(side)
	T.turn(bluntTurn)

	T.move(side)
	T.turn(pointyTurn)
	T.move(side)
	T.turn(bluntTurn)

	T.move(side)
	T.turn(pointyTurn)
	T.move(side)
	T.turn(bluntTurn)
}