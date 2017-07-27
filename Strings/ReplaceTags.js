function replaceTag(strArr) {
	if (strArr === undefined) {
		return;
	}
	var regex = /<a href="(.*?)">(.*?)<\/a>/,
		input = strArr.join(' '),
		match;

	match = regex.exec(input);

	while (match !== null) {
		input = input.replace(match[0], '[' + match[2] + ']' + '(' + match[1] + ')');
		match = regex.exec(input);
	}
	console.log(input);
}
replaceTag(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);