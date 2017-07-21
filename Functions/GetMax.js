function getMaxFromNumbers(numbers) {
	var splittedInput = numbers.split(' ');
	num1 = +splittedInput[0] || 0;
	num2 = +splittedInput[1] || 0;
	num3 = +splittedInput[2] || 0;

	function getMax(num1, num2) {
		var result = 0;
		result = Math.max(num1, num2);
		return result;
	}
	var max, res;
	max = getMax(num1, num2);
	res = getMax(max, num3);
	return res;
}
console.log(getMaxFromNumbers('-0.1 -0.1 -0.1'));