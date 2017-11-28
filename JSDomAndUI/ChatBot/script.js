let takeInputElement = document.getElementsByName('inputfield');
let sendButton = document.getElementsByName('send');
let box = document.getElementById('box');

function sendMsg() {
	let inputValue = takeInputElement[0].value;
	takeInputElement[0].value = '';
	let div = document.createElement('div');
	div.className = 'person';
	let text = document.createTextNode('You: ' + inputValue);
	let date = new Date().toLocaleTimeString();
	let spanDate = document.createElement('span');
	let spanTextDate = document.createTextNode(date);
	spanDate.className = 'date';
	spanDate.appendChild(spanTextDate);
	div.appendChild(text);
	div.appendChild(spanDate);
	box.appendChild(div);

	let myArray = ['You are handsome', 'I like you', 'You are the best', 'Marvelous'];
	let randomAnswer = myArray[Math.floor(Math.random() * myArray.length)];
	let answerDiv = document.createElement('div');
	let answer = document.createTextNode('Robot: ' + randomAnswer);
	answerDiv.className = 'robot';
	answerDiv.appendChild(answer);
	box.appendChild(answerDiv);

}

sendButton[0].addEventListener('click', sendMsg);
takeInputElement[0].addEventListener('keypress', function(e) {
	if (e.keyCode === 13) {
		sendMsg();
	} 
});
