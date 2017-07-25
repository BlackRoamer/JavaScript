function createPerson(fName, lName, age, gender) {
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.gender = gender;
	toString: return this.fName + ' ' + this.lName + ' ' + this.age + ' ' + this.gender;
}

var person = createPerson('Atanas', 'Atanasov', 19, 'm');
console.log(person);