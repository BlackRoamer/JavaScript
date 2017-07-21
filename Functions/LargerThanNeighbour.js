function checkForLarger(numbers) {
	var i,
		arr,
		len,
		counter = 0;
	if (numbers === undefined) {
		return;
	}
	arr = numbers.split(' ');
	len = arr.length;
	for (i = 0; i < len - 2; i += 1) {
		if (+arr[i] < +arr[i + 1] && +arr[i + 1] > arr[i + 2]) {
			counter += 1;
		}
	}
	console.log(counter);
}
checkForLarger('-26 -25 -28 31 2 27');