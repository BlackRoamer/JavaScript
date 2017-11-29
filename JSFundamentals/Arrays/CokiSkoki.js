function jump(arr) {
	arr = arr || [];
	if (!Array.isArray(arr)) {
		throw new Error('Input must be array');
	}
	let length = arr[0];
	let newArr = arr.slice(1).map(x => +x);
	let result = 1;

	for (let i = 0; i < length; i += 1) {
		if (newArr[i] % 2 === 1) {
			result = result * newArr[i];

		} else {
			result = result + newArr[i];
			i += 1;
		}
	}
	if (result > 1024) {
		result = result % 1024;
	}

	return result;

}
console.log(jump([
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9',
	'9'
]));