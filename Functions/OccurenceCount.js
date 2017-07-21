function count(numbers, num) {
	var i,
		length,
		arr = [],
		counter = 0;
	num = +num || 0;
	if (numbers === undefined) {
		return;
	} else {
		arr = numbers.split(' ');
		length = arr.length || 0;
		for (i = 0; i < length; i += 1) {
			if (+arr[i] === num) {
				counter += 1;
			}
		}
		return counter;
	}
}
console.log(count());