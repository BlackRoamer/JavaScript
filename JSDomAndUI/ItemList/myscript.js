function createList(selector, leftColumnValues, rightColumnValues) {
	if (typeof selector !== 'string') {
		throw new Error('Selector must be a valid string');
	}
	if (!!!(document.querySelector(selector))) {
		throw new Error('Invalid selector');
	}
	leftColumnValues = leftColumnValues || [];
	rightColumnValues = rightColumnValues || [];
	let element = document.querySelector(selector);
	let list = document.createElement('div');
	let leftColumn = document.createElement('div');
	let rightColumn = document.createElement('div');
	let root = document.querySelector('#root');

	leftColumn.className = 'column';
	rightColumn.className = 'column';
	list.className = 'column-container';

	let leftColumnEl = document.createElement('div');
	let rightColumnEl = document.createElement('div');
	leftColumnEl.className = 'select';
	rightColumnEl.className = 'select';

	let leftColumnRadioButton = document.createElement('input');
	let rightColumnRadioButton = document.createElement('input');
	leftColumnRadioButton.type = 'radio';
	leftColumnRadioButton.name = 'selectOne';
	let leftResult = true;
	leftColumnRadioButton.addEventListener('click', function() {
		rightResult = false;
		leftResult = true;
	});

	let rightResult = false;
	rightResult = rightColumnRadioButton.addEventListener('click', function() {
		leftResult = false;
		rightResult = true;
	});
	rightColumnRadioButton.type = 'radio';
	rightColumnRadioButton.name = 'selectOne';
	leftColumnEl.appendChild(leftColumnRadioButton);
	rightColumnEl.appendChild(rightColumnRadioButton);
	leftColumn.appendChild(leftColumnEl);
	rightColumn.appendChild(rightColumnEl);

	let leftColumnList = document.createElement('ol');
	let rightColumnList = document.createElement('ol');
	let image = document.createElement('img');
	image.src = 'Remove-icon.png';
	image.className = 'delete';
	for (let i = 0, len = leftColumnValues.length; i < len; i += 1) {
		let li = document.createElement('li');
		li.className = 'entry';
		li.innerText = leftColumnValues[i];
		li.appendChild(image.cloneNode(true));
		leftColumnList.appendChild(li);
	}
	for (let i = 0, len = rightColumnValues.length; i < len; i += 1) {
		let li = document.createElement('li');
		li.className = 'entry';
		li.innerText = rightColumnValues[i];
		li.appendChild(image.cloneNode(true));
		rightColumnList.appendChild(li);
	}
	leftColumn.appendChild(leftColumnList);
	rightColumn.appendChild(rightColumnList);
	list.appendChild(leftColumn);
	list.appendChild(rightColumn);

	let input = document.createElement('input');
	input.type = 'text';
	let button = document.createElement('button');
	button.innerText = 'Add';

	function addText() {
		if (input.value.trim() == '') {
			return;
		}
		let text = input.value;
		let li = document.createElement('li');
		li.className = 'entry';
		li.innerText = text;
		li.appendChild(image.cloneNode(true));
		if (leftResult) {
			leftColumnList.appendChild(li);
		}
		if (rightResult) {
			rightColumnList.appendChild(li);
		}
		input.value = '';
	}
	button.addEventListener('click', addText);

	list.addEventListener('click', function(event) {
		if (event.target.className === 'delete') {
			let parent = event.target.parentElement;
			let text = parent.innerText;
			input.value = text;
			parent.parentElement.removeChild(parent);

		}

	});
	list.appendChild(input);
	list.appendChild(button);
	root.appendChild(list);

}
createList('div', ['Banana', 'Apple', 'Cactus'], ['Cabbage', 'Cucumber']);