function createLis(selector, counter) {
	if (arguments.length !== 2) {
		throw new Error('Missing argument');
	}
	if (isNaN(counter)) {
		throw new Error('Counter must be number');
	}
	if (counter < 1) {
		throw new Error('Counter must be bigger than 1');
	}
	if (typeof selector !== 'string') {
		throw new Error('Invalid selector');
	}

	let $myUl = $('.items-list');
	for (let i = 0; i < counter; i += 1) {
		let $li = $('<li></li>').addClass('list-item');
		$myUl.append($li.text('List item ' + i));
	}
}
createLis('.test', 5);