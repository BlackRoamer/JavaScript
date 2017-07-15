function nThDigit(numbers) {

	var result = numbers / 100 | 0;
	var thirdDigit = result % 10;
	if (thirdDigit / 7 === 1) {
		console.log('true');

	} else {
		var res = thirdDigit | 0;
		console.log('false ' + res);
	}

}