var academy = (function() {
	var course = {},
		allPresentations = [],
		students = [];

	function init(courseTitle, presentationTitles) {
		var filteredPresentations = [];
		courseTitle = courseTitle || '';
		presentationTitles = presentationTitles || [];
		if (typeof courseTitle !== 'string') {
			throw new Error('Coursetitle must be string');
		}
		if (!Array.isArray(presentationTitles)) {
			throw new Error('Presentationtitles must be array');
		}

		let regex = /^\S+(?: \S+)*$/;
		if (!regex.test(courseTitle)) {
			throw new Error('Invalid title');
		}
		if (Array.isArray(presentationTitles)) {
			filteredPresentations = presentationTitles.filter(t => t.match(regex));
		}
		if (filteredPresentations.length === 0) {
			throw new Error('There are no presentations');
		}

		course.title = courseTitle;

		function Presentation(name, ID) {
			this.name = name;
			this.ID = ID;
		}

		for (let i = 0; i < filteredPresentations.length; i += 1) {
			let ID = i + 1;
			var presentation = new Presentation(filteredPresentations[i], ID);
			allPresentations.push(presentation);
		}
		course.presentations = allPresentations;

	}

	function addStudent(fullname) {
		let regexFullname = /(^[A-Z]{1}[a-z\\s]{1,} [A-Z]{1}[a-z\\s]{2,}$)/;
		fullname = fullname || '';
		if (!regexFullname.test(fullname)) {
			throw new Error('Invalid fullname');
		}
		let firstName = fullname.split(' ').slice(0, 1);
		let lastName = fullname.split(' ').slice(1);

		function Student(firstName, lastName, ID) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.ID = ID;
			this.homework = 0;
			this.examScore = 0;
			this.finalScore = 0;
			// Student.prototype.toString = function studentToString() {
			// 	return 'Firstname: ' + this.firstName + ' Lastname: ' + this.lastName +
			// 		' Id: ' + this.ID;
			// };
		}
		let currentID = students.length + 1;
		let currentStudent = new Student(firstName, lastName, currentID);
		students.push(currentStudent);
		course.students = students;
	}

	function getAllStudents() {
		var newArr = course.students.map(function(x) {
			return 'Firstname: ' + x.firstName + ' Lastname: ' + x.lastName +
				' Id: ' + x.ID;
		});

		return newArr;

	}

	function submitHomework(StudentID, HomeworkID) {
		StudentID = StudentID || -1;
		HomeworkID = HomeworkID || -1;
		let validId = course.students.map(x => x.ID).slice().includes(StudentID);
		if (!validId) {
			throw new Error('Invalid student ID');
		}

		if (!course.presentations.some(x => x.ID === HomeworkID)) {
			throw new Error('Invalid presentation ID');
		}

		for (let i in course.students) {
			if (course.students[i].ID == StudentID) {
				course.students[i].homework += 1;
			}
		}
	}

	function pushExamResults(results) {
		results = results || [];
		if (!Array.isArray(results) || results.length <= 0) {
			throw new Error('No results are entered');
		}

		for (let index in results) {
			if (isNaN(results[index].score)) {
				throw new Error('Score is not a number');
			}
		}
		var existAllId = results.every(x => course.students.some(a => x.StudentID === a.ID));
		if (!existAllId) {
			throw new Error('Not all IDs are valid');
		}

		for (var i in results) {
			for (var j in course.students) {
				// console.log(course.students[j].ID);
				if (course.students[j].ID === results[i].StudentID) {
					course.students[j].examScore = results[i].score;
					// console.log(course.students[j].lastName + course.students[j].examScore);
				}
			}
		}

	}

	function getTopStudents() {
		var allHomeworks = allPresentations.length;
		var finalScore = course.students.map(x => (x.examScore * 0.75) +
			(x.homework / allHomeworks * 0.25));

		for (let i = 0; i < finalScore.length; i += 1) {
			course.students[i].finalScore = finalScore[i];
		}

		function sortNums(a, b) {
			return b.finalScore - a.finalScore;
		}
		course.students.sort(sortNums);
		return course.students.slice(0, 10);
	}

	return {
		course: {
			createCourse: init,
			addStudent: addStudent,
			getAllStudents: getAllStudents,
			submitHomework: submitHomework,
			setNote: pushExamResults,
			getTopStudents: getTopStudents
		}
	};
}());
let scores = [{
	StudentID: 4,
	score: 3.25,
}, {
	StudentID: 1,
	score: 4,
}, {
	StudentID: 3,
	score: 5,
}, {
	StudentID: 5,
	score: 6,
}, {
	StudentID: 2,
	score: 5.5
}];
let homeworks = ['Python', 'Java', 'JS', 'CSharp', 'HTML', 'CSS'];
let students = ['Ivan Ivanov', 'Boyan Petkov', 'Nikolay Ivanov', 'Petar Atanasov', 'Stoil Petrov'];
academy.course.createCourse('Telerik', homeworks);
for (let i = 0; i < students.length; i += 1) {
	academy.course.addStudent(students[i]);
}
console.log(academy.course.getAllStudents());
for (let k = 1; k <= homeworks.length; k += 1) {
	academy.course.submitHomework(5, k);
	academy.course.submitHomework(2, k);
}
for (let k = 1; k <= homeworks.length; k += 2) {
	academy.course.submitHomework(4, k);
	academy.course.submitHomework(3, k);
	academy.course.submitHomework(1, k);
}
academy.course.setNote(scores);
console.log(academy.course.getTopStudents());