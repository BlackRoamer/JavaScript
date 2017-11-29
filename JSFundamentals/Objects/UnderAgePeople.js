var people = [];

function Person(fName, age) {
	this.fName = fName;
	this.age = age;
}

function addPerson(fName, age) {
	var person = new Person(fName, age);
	people.push(person);
}

addPerson('John', '5');
addPerson('Peter', '12');
addPerson('Jack', '52');
addPerson('Mark', '15');
addPerson('Jakob', '35');
addPerson('Frank', '18');

var underAged = people.filter(function underAged(person) {
	return person.age < 18;
});
console.log(underAged);