function isEven(number) {
	var even = 0,
		odd = 1;

	if (number === even) {
		return true;
	} else if (number === odd) {
		return false;
	} else {
		if (number > 1) {
			return isEven(number - 2);
		} else {
			return isEven(number + 2);
		}
	}
}
console.log(isEven(7));