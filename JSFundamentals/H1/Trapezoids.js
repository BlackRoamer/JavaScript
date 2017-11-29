 function calcTrap(numbers) {
 	var a = numbers[0] * 1;
 	var b = numbers[1] * 1;
 	var h = numbers[2] * 1;
 	var calcArea = ((a + b) / 2) * h;
 	return calcArea.toFixed(7);
 }