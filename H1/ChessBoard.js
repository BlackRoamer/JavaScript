function makeChessBoard(n) {
	var result = '';
	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			if (i % 2 !== 0) {
				result += '*';
				result += ' ';
			} else {
				result += ' ';
				result += '*';
			}
		}
		result += '\n';
	}
	console.log(result);
}
makeChessBoard(6);