function findBiggestPrime(limit) {
	var i,
		result,
		maxDivider,
		divider,
		isPrime,
		maxPrime;
	limit = +limit || 0;
	maxPrime = 0;
	for (i = 2; i <= limit; i += 1) {
		isPrime = true;
		divider = 2;
		maxDivider = Math.sqrt(i);
		while (divider <= maxDivider) {
			if (i % divider === 0) {
				isPrime = false;
				break;
			}
			divider += 1;
		}
		if (isPrime) {
			maxPrime = i;
		}



	}


	console.log(maxPrime);


}
findBiggestPrime(10);