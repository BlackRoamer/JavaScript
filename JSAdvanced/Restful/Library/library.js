$(() => {

    //Authentication 

    const username = 'guest';
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_SkszmzjDG/Books';
    const baseHeader = {
        'Authorization': 'Basic ' + btoa(username + ':' + username)
    };


    //DOM elements
    const booksList = $('#books');
    let informationBox = $('#errorHandler');
    let informationContent = $('#content');
    const createBookBtn = $('#createBook');
    const deleteBtn = $('#deleteButton');

    //Load books
    requestBooks();
    createBookBtn.on('click', createBook);
    deleteBtn.on('click', deleteBook);

    //List books

    function requestBooks() {
        booksList.text('Loading...');
        disableButton();
        $.ajax({
            url: baseUrl,
            headers: baseHeader,
            method: 'GET'

        }).then(displayBooks)
            .catch(displayError)
            .always(enableButton);
    }

    function displayBooks(data) {
        booksList.empty();
        successInfo();
        for (let book of data) {
            booksList.append(`<li >${book.title} - ${book.author}</li>`);
        }
    }

    function displayError(data) {
        booksList.empty();
        errorInfoLoadingBooks();
        booksList.append(`Error:  TEST ${data.statusText}`);
        console.log(data);
    }

    //Create book

    //Problem with server return only error

    function createBook() {
        disableButton();
        let bookTitle = $('#bookname').val().trim();
        let bookAuthor = $('#bookauthor').val().trim();

        if (bookTitle.length < 2 || bookAuthor.length < 2) {
            let err = 'Invalid author or title length';
            errorCreationBook(err);
            enableButton();
        } else {

            $.ajax({
                url: baseUrl,
                headers: baseHeader,
                method: 'POST',
                dataType: 'applicaton/json',
                data: {
                    title: bookTitle,
                    author: bookAuthor
                }
            }).catch(handleCreationBook);
        }

        $('#bookname').val('');
        $('#bookauthor').val('');

    }

    //DELETE Book

    function deleteBook() {
        disableButton();
        let bookTitle = $('#deleteBook').val();
        $.ajax({
            url: baseUrl + `/?query={"title":"${bookTitle}"}`,
            headers: baseHeader,
            method: 'DELETE'
        }).then(deleteBookMsg);

        $('#deleteBook').val('');

    }

    // Info methods

    //Deleting

    function deleteBookMsg() {
        requestBooks();
        informationBox.css('background-color', 'black');
        informationBox.css('color', 'white');
        informationContent.text('Deleted');
        informationBox.show();
        setTimeout(() => {
            informationBox.hide();
        }, 1000);

    }

    //Creation

    function handleCreationBook(data) {
        console.log(data);
        if (data.status == 201) {
            succesCreationBook(data.statusText);
            requestBooks();
        } else {
            errorCreationBook(data.statusText);
        }
    }

    function succesCreationBook(text) {
        informationBox.css('background-color', 'orange');
        informationBox.css('color', 'white');
        informationContent.text(text);
        informationBox.show();
        setTimeout(() => {
            informationBox.hide();
        }, 1000);
    }

    function errorCreationBook(err) {

        informationBox.css('background-color', 'red');
        informationBox.css('color', 'white');

        informationContent.text(`Error: ${err}`);

        informationBox.show();
        setTimeout(() => {
            informationBox.hide();
        }, 1000);

    }

    //Loading

    function errorInfoLoadingBooks() {

        informationBox.css('background-color', 'red');
        informationBox.css('color', 'white');

        informationContent.text('Error');

        informationBox.show();
        setTimeout(() => {
            informationBox.hide();
        }, 1000);

    }

    function successInfo() {
        informationBox.css('background-color', 'forestGreen');
        informationBox.css('color', 'white');
        informationContent.text('Success');
        informationBox.show();
        setTimeout(() => {
            informationBox.hide();
        }, 1000);
    }

    //Help methods

    function disableButton() {
        createBookBtn.prop('disabled', true);

        deleteBtn.prop('disabled', true);
    }

    function enableButton() {
        createBookBtn.prop('disabled', false);
     
        deleteBtn.prop('disabled', false);
    }
});