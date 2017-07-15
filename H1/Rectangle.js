function calcArea(numbers) {
	var a = numbers[0];
	var b = numbers[1];
	var area = a * b;
	var perimeter = 2 * a + 2 * b;
	console.log (area.toFixed(2) + ' ' + perimeter.toFixed(2));

}