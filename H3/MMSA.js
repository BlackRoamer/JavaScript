function calculateMMSA(numbers) {
	var min,
		max,
		sum,
		average,
		i,
		length,
		index,
		temp,
		j,
		firstNum,
		secondNum;
	sum = 0;
	length = numbers.length;
	for (i = 0; i < length; i += 1) {
		for (index = i + 1; index < length; index += 1) {
			if (+numbers[i] > +numbers[index]) {
				temp = numbers[i];
				numbers[i] = numbers[index];
				numbers[index] = temp;
			}
		}
	}
	for (i = 0; i < length; i += 1) {
		sum += +numbers[i];
	}
	min = +numbers[0];
	max = +numbers[numbers.length - 1];
	average = +(sum / length);
	console.log('min=' + min.toFixed(2));
	console.log('max=' + max.toFixed(2));
	console.log('sum=' + sum.toFixed(2));
	console.log('avg=' + average.toFixed(2));
}

function calculateMMSAOptimized(numbers) {
	var min,
		max,
		sum,
		average,
		i,
		length,

		min = +(Math.min(...numbers));
	max = +(Math.max(...numbers));
	sum = 0;
	length = numbers.length;
	for (i = 0; i < length; i += 1) {
		sum += +numbers[i];
	}
	average = +(sum / length);
	console.log('min=' + min.toFixed(2));
	console.log('max=' + max.toFixed(2));
	console.log('sum=' + sum.toFixed(2));
	console.log('avg=' + average.toFixed(2));
}