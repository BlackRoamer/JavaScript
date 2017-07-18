function createMatrix(num) {
	var i,
		inputNumber,
		k,
		result;
	inputNumber = +num;
	result = '';
	for (i = 1; i <= inputNumber; i += 1) {
		result += (i + ' ');
		for (k = i + 1; k < inputNumber + i; k += 1) {
			result += (k + ' ');
		}
		result += '\n';
	}
	console.log(result);
}