function makeTriangle(n) {
	var result = '';
	for (var i = 0; i < n; i += 1) {
		for (var j = 0; j <= i; j += 1) {
			result += '*';
		}
		console.log(result);
		result = '';
	}

}
makeTriangle(6);