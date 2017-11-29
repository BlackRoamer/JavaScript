function calcMaxIncrSeq(numbers) {
	var k,
		index,
		len,
		count = 1,
		result = 0;
	len = numbers.length;
	for (k = 0; k < len - 1; k += 1) {
		index = k + 1;
		if (+numbers[k] < +numbers[index]) {
			count += 1;
			if (result <= count) {
				result = count;
			}
		} else {
			count = 1;
		}

	}
	console.log(result);
}
calcMaxIncrSeq(['8', '2', '3', '4', '5', '7', '3', '2', '3', '4', '2', '2', '4']);