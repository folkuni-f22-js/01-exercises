// Exempel på upprepning och villkor

console.log('Före loop')
let counter = 0
while( counter < 4 ) {
	if( counter == 2 ) {
		console.log('two')
	}

	console.log('LOOP, counter=' + counter)
	counter = counter + 1
}
console.log('Efter loop')


// Tre likvärdiga sätt att uppdatera en variabel med ett:
let x = 1
x = x + 1
x += 1
x++
console.log('x är: ' + x)