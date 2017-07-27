function replaceWhiteSpace(str) {
	if (str === undefined) {
		return;
	}

	var regex = /\s/g,
		replacer = '&nbsp;',
		result = '';

	result = str.replace(regex, replacer);
	console.log(result);
}
replaceWhiteSpace('');