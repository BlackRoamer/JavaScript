function transformHexToDec(input) {
	var i,
		length,
		k,
		result = 0,
		power = 1,
		num = 0;
	length = input.length;
	for (i = 0; i < length; i += 1) {
		switch (input[i]) {
			case 'A':
				num = 10;
				break;
			case 'B':
				num = 11;
				break;
			case 'C':
				num = 12;
				break;
			case 'D':
				num = 13;
				break;
			case 'E':
				num = 14;
				break;
			case 'F':
				num = 15;
				break;
			default:
				num = input[i] | 0;
		}
		for (k = length - 1 - i; k > 0; k -= 1) {
			power *= 16;
		}
		result += num * power;
		power = 1;
		num = 0;
	}
	console.log(result);
}