function parseUrl(strArr) {
	if (strArr === undefined) {
		return;
	}
	var newArr,
		res,
		protocol,
		server,
		resource,
		regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g;
	newArr = strArr.map(s => {
		return s.trim();
	});
	res = regex.exec(newArr);
	server = res[2];
	protocol = res[1];
	resource = res[3];
	console.log('protocol: ' + protocol);
	console.log('server: ' + server);
	console.log('resource: ' + resource);
}
parseUrl(['http://telerikacademy.com/Courses/Courses/Details/239']);