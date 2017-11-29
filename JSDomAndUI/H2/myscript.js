function toggleButton(element) {
	if (typeof element !== 'string') {
		throw new Error('Invalid element')
	}

	let existingDomEl = document.getElementsByTagName(element).length;
	let existingId = !!document.getElementById(element);
	if (!existingId && existingDomEl === 0) {
		throw new Error("Element doesn't exist in DOM");
	}

	let elementsClassButton = document.getElementsByClassName('button');
	let elementsClassContent = document.getElementsByClassName('content');
	let elementsButtonArr = Array.from(elementsClassButton);

	let elementsClassContentArr = Array.from(elementsClassContent);
	elementsClassContentArr.forEach(x => x.style.visibility = 'visible');
	elementsButtonArr.forEach(x => x.innerText = 'hide');

	let elementsButtonsLen = elementsButtonArr.length;
	for (let i = 0; i < elementsButtonsLen; i += 1) {
		elementsButtonArr[i].addEventListener('click', function() {
			let range = $(elementsButtonArr[i]).nextUntil('.button');
			let firstElement = range.filter('.content');

			if (firstElement[0] === undefined) {
				return;
			} else {
				if (firstElement[0].style.visibility == 'visible') {
					firstElement[0].style.visibility = 'hidden';
					elementsButtonArr[i].innerText = 'show';

				} else if (firstElement[0].style.visibility == 'hidden') {
					firstElement[0].style.visibility = 'visible';
					elementsButtonArr[i].innerText = 'hide';
				}
			}

		});
	}
}
toggleButton('div');