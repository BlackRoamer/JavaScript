function calcMostFrqNum(numbers) {
	var i,
		j,
		k,
		temp,
		len,
		nextIndex,
		counter = 1,
		result = 0,
		resNum = 0;
	len = numbers.length;
	for (i = 0; i < len; i += 1) {
		for (j = 0; j < len; j += 1) {
			if (+numbers[i] > +numbers[j]) {
				temp = numbers[i];
				numbers[i] = numbers[j];
				numbers[j] = temp;
			}
		}
	}
	for (k = 0; k < len - 1; k += 1) {
		nextIndex = k + 1;
		if (+numbers[k] === +numbers[nextIndex]) {
			counter += 1;
			if (result < counter) {
				result = counter;
				resNum = numbers[k];
			}
		} else {
			counter = 1;
		}
	}
	console.log(resNum + ' (' + result + ' times)');
}
calcMostFrqNum(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);