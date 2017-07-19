function increaseNum(num) {
	var i,
		length,
		k,
		numbers = [],
		arrRes = [];
	num = +num;
	for (i = 0; i < num; i += 1) {
		numbers[i] = i * 5;
	}
	for (k in numbers) {
		console.log(numbers[k]);
	}
}