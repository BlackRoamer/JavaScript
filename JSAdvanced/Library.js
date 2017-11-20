var library = (function() {
	var books = [];
	var categories = [];

	function listBooks() {
		let copyOfBooks = books.slice();
		copyOfBooks.sort(function(a, b) {
			return a.ID - b.ID;
		});
		return copyOfBooks;
	}

	function addBook(book) {
		var invalidInput = false;
		var ISBNValidator = /^(97(8|9))?\d{9}(\d|X)$/;
		if (book.title === undefined || book.title.length <= 2 || book.title.length >= 100) {
			try {
				throw new Error('Invalid book name');
			} catch (e) {
				invalidInput = true;
				console.log(e);
			}
		}
		if (book.author === undefined || book.author === ' ' || book.author === null || book.author.length < 2) {
			try {
				throw new Error('Invalid author name');
			} catch (e) {
				invalidInput = true;
				console.log(e);
			}
		}
		if ((book.ISBN.length !== 10 || book.ISBN.length !== 13) && !ISBNValidator.test(book.ISBN)) {
			try {
				throw new Error('Invalid ISBN');
			} catch (e) {
				invalidInput = true;
				console.log(e);
			}
		}
		if (book.category === undefined) {
			book.category = 'default';
		}

		books.forEach(function(existingBook) {
			if ((existingBook.title === book.title) || (existingBook.ISBN === book.ISBN)) {
				try {
					throw new Error('Invalid ISBN');

				} catch (e) {
					invalidInput = true;
					console.log(e);
				}
			}
		});
		if (!invalidInput) {
			book.ID = books.length + 1;
			books.push(book);
			categories.push(book.category);
		}
		return book;
	}

	function listCategories() {
		return categories;
	}

	return {
		books: {
			list: listBooks,
			add: addBook
		},
		categories: {
			list: listCategories
		}
	};
}());
var newBook = {
	title: 'Harry Potter and the Deathly Hallows',
	author: 'J. K. Rowling',
	ISBN: '0545010225',
	category: 'Fantasy'

};
var newBook2 = {
	title: 'Harry Potter and the Goblet of Fire ',
	author: 'J.K. Rowling',
	ISBN: '9781408855928',
	category: 'mystery'

};
var newBook3 = {
	title: 'InvalidBook',
	author: 'author',
	ISBN: 3

};

library.books.add(newBook);
library.books.add(newBook2);
console.log(library.books.list());
library.books.add(newBook3);
console.log(library.books.list());
console.log(library.categories.list());