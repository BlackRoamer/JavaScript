function removeTags(strArr) {
	if (strArr === undefined) {
		return;
	}
	var newArr = strArr.map(string => {
		return string.trim();
	});

	var regex = /(<([^>]+)>)/ig,
		string = newArr.join('');
	result = '';
	result = string.replace(regex, '');
	console.log(result);

}
removeTags([
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
]);