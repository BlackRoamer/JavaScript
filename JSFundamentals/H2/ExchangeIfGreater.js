function exchange(numbers) {
	var firstNumber = numbers[0] | 0;
	var secondNumber = numbers[1] | 0;
	if (firstNumber > secondNumber) {
		var temp = secondNumber;
		secondNumber = firstNumber;
		firstNumber = temp;
		console.log(firstNumber + ' ' + secondNumber);
	} else {
		console.log(firstNumber + ' ' + secondNumber);
	}
}