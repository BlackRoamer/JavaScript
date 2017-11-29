function calcSum(numbers) {
	var sum,
		firstNum,
		secondNum,
		length = numbers.length;
	firstNum = +numbers[0];
	secondNum = +numbers[length - 1];
	sum = firstNum + secondNum;
	console.log(sum);
}