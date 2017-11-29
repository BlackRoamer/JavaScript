function reverse(str) {
	if (str === undefined) {
		return;
	}
	var i,
		temp,
		res = '',
		len = str.length;
	for (i = 0; i < len; i += 1) {
		temp = str[(len - 1) - i];
		res += temp;
	}
	console.log(res);
}
reverse('sample');