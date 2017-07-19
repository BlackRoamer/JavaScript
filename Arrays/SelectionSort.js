function sortNums(numbers) {
	var k,
		p,
		result,
		q,
		len,
		i,
		j,
		temp,
		minIndex,
		smallest,
		filteredNums = [];
	filterredNums = numbers.filter(isNumber);
	filterredNums = filterredNums.filter((element, i, arr) => arr.indexOf(element) === i);

	len = filterredNums.length;
	result = [];
	q = 0;
	for (i = 0; i < len; i += 1) {
		minIndex = i;
		for (j = i + 1; j < len; j += 1) {
			if (+filterredNums[j] < +filterredNums[minIndex]) {
				minIndex = j;
			}
		}
		if (i !== minIndex) {
			temp = filterredNums[i];
			filterredNums[i] = filterredNums[minIndex];
			filterredNums[minIndex] = temp;

		}
	}

	for (k in filterredNums) {
		console.log(filterredNums[k]);
	}
}

function isNumber(num) {
	return !(isNaN(num));

}

sortNums(['10', '36', '10', 5, '34', '28', '38', 'a', '2', '10',
	'31', '27', '30', '20', '20'
]);