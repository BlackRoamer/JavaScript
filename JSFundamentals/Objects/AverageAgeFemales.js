var people = [];

function Person(fName, age, gender) {
	this.fName = fName;
	this.age = +age;
	this.gender = gender;
}

function addPerson(fName, age, gender) {
	var person = new Person(fName, age, gender);
	people.push(person);
}

addPerson('John', '5', 'm');
addPerson('Peter', '12', 'm');
addPerson('Jack', '52', 'm');
addPerson('Katrin', '16', 'f');
addPerson('Julia', '35', 'f');
addPerson('Frank', '18', 'm');

var females = people.filter(function isFemale(person) {
	return person.gender === 'f';
});

function averageAge(people) {
	var i,
		age = 0,
		count = people.length;

	for (i = 0; i < count; i += 1) {
		age += people[i].age;
	}
	return (age / count);
}

console.log(averageAge(females));