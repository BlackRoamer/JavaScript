function checkForBrackets(str) {
	if (str === undefined) {
		return;
	}
	var i,
		count = 0,
		len = str.length;
	for (i = 0; i < len; i += 1) {
		if (str[i] === '(') {
			count += 1;
		}
		if (str[i] === ')') {
			count -= 1;
		}
	}
	if (count === 0 && (str[0] === '(' && str[len - 1] === ')')) {
		console.log('Correct');
	} else {
		console.log('Incorrect');
	}
}
checkForBrackets('())()()');