function calcMaxSeq(numbers) {
	var len,
		k,
		index,
		firstNum,
		nextNum,
		longest = 1,
		counter = 1;
	len = numbers.length;
	for (k = 0; k < len; k += 1) {
		index = k + 1;
		firstNum = +numbers[k];
		nextNum = +numbers[index];
		if (firstNum === nextNum) {
			counter += 1;
			if (longest <= counter) {
				longest = counter;
			}
		} else {
			counter = 1;
		}
	}
	console.log(longest);

}