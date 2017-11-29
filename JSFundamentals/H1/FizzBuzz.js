function doFizzOrBuzz() {
	for (let i = 1; i <= 151; i += 1) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else {
			console.log(i);
		}
	}
}
doFizzOrBuzz();