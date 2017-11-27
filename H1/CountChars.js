function countChars(str, char) {
	var counter = 0;
	var strLength = str.length;
	for (let i = 0; i < strLength; i += 1) {
		if (str.charAt(i) === char) {
			counter += 1;
		}
	}
	return counter;
}

console.log(countChars('testtest', 't'));