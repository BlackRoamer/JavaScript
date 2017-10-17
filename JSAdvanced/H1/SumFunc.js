function sumNums(numsArr) {
	if (numsArr !== undefined) {
		if (numsArr.constructor === Array) {
			function isAllNumbers(checkArr) {
				return checkArr.every(function(element) {
					return typeof element === 'number';
				});
			}
			if (!isAllNumbers(numsArr)) {
				try {
					throw new Error('Some of the elements is not a number');
				} catch (e) {
					console.log(e.message);
				}
			} else {
				let result = 0;
				result = numsArr.reduce((sum, value) => sum + value);
				console.log(result);
			}
		} else {
			result = null;
			console.log(result);
		}
	} else {
		try {
			throw new Error('Parameter is not passed');
		} catch (e) {
			console.log(e.name, e.message);
		}

	}
}


sumNums([1, 2, '3']);