function sortNums(nums) {
	var i, j, temp, length = nums.length;
	for (i = 0; i < length - 1; i += 1) {
		j = i + 1;

		if (!isNaN(nums[i])) {
			nums[i] = nums[i] * 1;
		}
		if (!isNaN(nums[j])) {
			nums[j] = nums[j] * 1;
		}
		if (nums[i] > nums[j]) {
			temp = nums[j];
			nums[j] = nums[i];
			nums[i] = temp;
		}
	}
	if (nums[0] > nums[1]) {
		temp = nums[0];
		nums[0] = nums[1];
		nums[1] = temp;
	}
	var result = nums[2] + ' ' + nums[1] + ' ' + nums[0];
	console.log(result);
}