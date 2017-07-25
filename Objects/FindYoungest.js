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

function youngestPerson(people) {
	var minAge = 9999;
	var index = 0;
	for (var i in people) {
		if (people[i].age < minAge) {
			minAge = people[i].age;
			index = i;
		}
	}
	return people[index];
}
console.log(youngestPerson(people));