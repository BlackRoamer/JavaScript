function calcFactorial(num) {
	var i, sum;
	sum = '';
	for (i = 1; i <= num; i += 1) {
		sum += i + ' ';
	}
	console.log(sum);
}