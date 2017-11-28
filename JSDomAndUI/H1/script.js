function takeInput(element, content) {
	if (arguments.length !== 2) {
		throw new Error('You must enter 2 params')
	}
	if (typeof element !== 'string') {
		throw new Error('Element must be string');
	}
	if (!Array.isArray(content)) {
		throw new Error('The input must be array');
	}

	let existingElementsLen = document.getElementsByTagName(element).length;
	let validId = !!document.getElementById(element);
	if (existingElementsLen === 0 && !validId) {
		throw new Error('Invalid Element');
	}

	let elementById = document.getElementById(element);
	let arrLen = content.length;
	if (validId) {
		elementById.innerHTML = '';
		for (let i = 0; i < arrLen; i += 1) {
			let div = document.createElement('div');
			let text = document.createTextNode(content[i]);
			div.appendChild(text);
			elementById.appendChild(div);
		}
		document.body.appendChild(elementById);
	} else if (existingElementsLen !== 0) {
		let el = document.getElementsByTagName(element)[0];
		el.innerHTML = '';
		for (let i = 0; i < arrLen; i += 1) {
			let div = document.createElement('div');
			let text = document.createTextNode(content[i]);
			div.appendChild(text);
			el.appendChild(div);
		}
		document.body.appendChild(el);
	} else {
		throw new Error('There is no element with this ID');
	}

}

takeInput('pesho', ['Test 1', 'Test 2']);
takeInput('span', ['Test 3', 'Test 4']);
takeInput('div', ['Test 5', 'Test 6']);
takeInput('Lqlq', ['Test 7']);