function fillArr(start, end, step) {
	var arr = [];
	if (step >= 0) {
		while (start !== end + 1) {
			if (start % step === 0) {
				arr.push(start);
			}
			start += 1;
		}
	} else {
		while (start - 1 !== end) {
			if (end % step === 0) {
				arr.push(end);
			}
			end -= 1;
		}
	}

	return arr;
}

function sumNumsFromArr(arr) {
	let sum = arr.reduce((a, b) => a + b);
	return sum;
}
console.log(sumNumsFromArr(fillArr(5, 10, 1)));