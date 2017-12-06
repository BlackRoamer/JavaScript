function createLi(selector, count) {
	if (arguments.length !== 2) {
		throw new Error('You must pass 2 arguments');
	}
	let counter = parseInt(count);
	if (isNaN(counter)) {
		throw new Error('Counter must be a number');
	}
	if (counter < 1) {
		throw new Error('counter must be a number bigger than 0');
	}
	let $elements = $(selector);
	if ($elements.length !== 0) {
		return;
	}
	let $list = $('ul').first();
	for (let i = 1; i <= count; i += 1) {
		let $li = $('<li/>');
		$li.addClass('list-item');
		if (i % 2 === 0) {
			$li.css('color', 'red');
		}
		$li.text('List item ' + i);
		$list.append($li);
	}
}
createLi('li', '6');