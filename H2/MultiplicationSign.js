function showSign(nums) {
	var firstNum = nums[0];
	var secondNum = nums[1];
	var thirdNum = nums[2];
	if (isNaN(firstNum)) {
		firstNum = 1;
	} else {
		firstNum = firstNum | 0;
	}
	if (isNaN(secondNum)) {
		secondNum = 1;
	} else {
		secondNum = secondNum | 0;
	}
	if (isNaN(thirdNum)) {
		thirdNum = 1;
	} else {
		thirdNum = thirdNum | 0;
	}
	if (!(!!(firstNum) && !!(secondNum) && !!(thirdNum))) {
		console.log(0);
	} else {
		if ((firstNum > 0 && secondNum > 0 && thirdNum > 0) || (firstNum < 0 && secondNum < 0 && thirdNum > 0) || (firstNum > 0 && secondNum < 0 && thirdNum < 0) || (firstNum < 0 && secondNum > 0 && thirdNum < 0)) {
			console.log('+');
		} else {
			console.log('-');
		}
	}

}