function checkForFirstLarger(numbers) {
	var i,
		len,
		arr,
		index = -1;
	if (numbers === undefined) {
		return;
	}
	arr = numbers.split(' ');
	len = arr.length;
	for (i = 0; i < len - 2; i += 1) {
		if (+arr[i] < +arr[i + 1] && +arr[i + 1] > +arr[i + 2]) {
			index = i + 1;
			break;
		}
	}
	console.log(index);
}
checkForFirstLarger('1 -b -2 3 2 aaa 2 ');