function calcLength(words) {
	var firstWord,
		secondWord,
		i,
		len;
	firstWord = words[0];
	secondWord = words[1];
	if (firstWord > secondWord) {
		console.log('>');
	} else if (firstWord === secondWord) {
		console.log('=');
	} else {
		console.log('<');
	}
}