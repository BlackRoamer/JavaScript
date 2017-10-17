function findPrimes(startRange, endRange) {
	if (typeof startRange === 'undefined' || typeof endRange === 'undefined') {
		try {
			throw new Error('Required param is missing');
		} catch (e) {
			console.log(e.message);
		}
	} else {
		let firstNum = +startRange;
		let secondNum = +endRange;
		if (Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
			if (firstNum >= 0 && secondNum >= 0) {
				let isPrime = true;
				let result = [];
				for (let i = firstNum; i <= secondNum; i += 1) {
					for (let k = 2; k <= Math.sqrt(i); k += 1) {
						if (i % k === 0) {
							isPrime = false;
							break;
						}
					}
					if (isPrime && i > 1) {
						result.push(i);
					}
					isPrime = true;
				}
				console.log(result);

			} else {
				try {
					throw new Error('Range must be positive');
				} catch (e) {
					console.log(e.message);
				}
			}

		} else {
			try {
				throw new Error("Parameters can't be parsed to numbers");
			} catch (e) {
				console.log(e.message);
			}
		}
	}
}
findPrimes('0', '67');