function searchForText(substr, str) {
	if (substr === undefined || str === undefined) {
		return;
	}

	var res;
	regex = new RegExp(substr, 'g');
	count = 0;

	res = str.match(regex);
	if (res !== null) {
		count = res.length;
	} else {
		console.log(count);
		return;
	}

	console.log(count);

}

searchForText('in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
);