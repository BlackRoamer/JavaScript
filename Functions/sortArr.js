function sort(numbers) {
	var i,
		j,
		k,
		result = '',
		arr,
		temp,
		len;
	if (numbers === undefined) {
		return;
	}

	arr = numbers.split(' ');
	len = arr.length;
	for (i = 0; i < len; i += 1) {
		for (j = 0; j < len; j += 1) {
			if (+arr[i] < +arr[j]) {
				temp = +arr[i];
				arr[i] = +arr[j];
				arr[j] = temp;
			}
		}
	}
	console.log(arr);
	for (k in arr) {
		if (typeof arr[k] === 'number') {
			result += arr[k] + ' ';
		}
	}
	console.log(result);
}
sort('-2 a 1 0 -3 5');