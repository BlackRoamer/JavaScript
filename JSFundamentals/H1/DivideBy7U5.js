function divideBy5And7(numbers) {
	if (numbers % 5 === 0 && numbers % 7 === 0) {
		var num = numbers;
		console.log('true ' + num);
	} else {
		console.log('false ' + numbers);
	}
}