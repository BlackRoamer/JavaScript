$(() => {

    //Constans for server
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_HJBP0Ma9G';
    const appSecret = 'c8028484a4f94c32a2b04b24d6debd9d';


    //DOM Elements
    let navigation = $('#navigation');
    let homeSection = $('#home');
    let loginSection = $('#login');
    let registerSection = $('#register');
    let logOutSection = $('#logOut');
    let listBooksSection = $('#booksList');
    let createBookSection = $('#createBook');

    //Execute
    showView('Home');
    logedOutNav();
    navigation.on('click', (data) => showView(data.target.innerText));
    loginSection.find('form').submit(login);
    registerSection.find('form').submit(register);
    createBookSection.find('form').submit(createBook);
    $('#booksBody').on('click', '.deleteBtn', function (data) {
        console.log(data);
        let id = data.currentTarget.id;
        deleteBook(id);
    });

    //Header and navigation functions
    function showView(name) {
        hideAllSection();
        switch (name) {
            case 'Home': homeSection.show();
                break;
            case 'Login': loginSection.show();
                break;
            case 'Register': registerSection.show();
                break;
            case 'List books': listBooksSection.show(), getBooks();
                break;
            case 'Create book': createBookSection.show();
                break;
            case 'Log out': logOut();
                break;
        }
    }

    function hideAllSection() {
        $('section').hide();
    }

    function logedInNav() {
        $('#loginNav').hide();
        $('#registerNav').hide();
        $('#listBooksNav').show();
        $('#logOutNav').show();
        $('#createBookNav').show();
    }

    function logedOutNav() {
        $('#logOutNav').hide();
        $('#createBookNav').hide();
        $('#loginNav').show();
        $('#registerNav').show();
        $('#listBooksNav').hide();
    }

    //Users

    function login() {
        let username = $('#usernameLog').val();
        let password = $('#passwordLog').val();
        $.ajax({
            url: baseUrl + 'user' + '/' + appKey + '/' + 'login',
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify({
                username: username,
                password: password
            })
        }).then(successLogin)
            .catch(errorLog);

        $('#usernameLog').val('');
        $('#passwordLog').val('');
    }

    function register() {
        $.ajax({
            url: baseUrl + 'user' + '/' + appKey,
            headers: {
                'Authorization': 'Basic ' + btoa(appKey + ':' + appSecret),
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify({
                username: $('#usernameReg').val(),
                password: $('#passwordReg').val()
            })

        }).then(successRegister)
            .catch((errorLog));

        $('#usernameReg').val('');
        $('#passwordReg').val('');
    }

    function logOut() {
        $.ajax({
            url: baseUrl + 'user' + '/' + appKey + '/' + '_logout',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            },
            method: 'POST'

        }).then(successLogOut)
            .catch(errorLog);
    }

    function successLogOut() {
        $('#greeting').remove();
        logOutSection.show();
        setTimeout(() => (showView('Home')), 1000);
        localStorage.clear();
        logedOutNav();
    }

    function successLogin(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('creator', data._acl.creator);
        setGreeting();
        showView('List books');
    }

    function successRegister() {
        hideAllSection();

        let div = $('<div/>');
        let img = $('<img/>', {
            src: 'registration.png'
        });
        div.text('Your registration was successufully');
        div.append(img);
        div.appendTo('main');

        setTimeout(() => (
            div.detach(),
            showView('Home')
        ), 1500)
    }

    function setGreeting() {
        logedInNav();
        let span = $('<span/>');
        span.attr('id', 'greeting');
        span.css({ color: 'white', fontSize: '1.3em', position: 'relative', paddingLeft: '15px' });
        span.text('Hello, ' + localStorage.getItem('username') + '!');
        navigation.append(span);

    }

    //Books

    function getBooks() {
        $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/Books',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            },
            method: 'GET'
        }).then(showBooks)
            .catch(errorLog);
    }

    function showBooks(data) {
        let tableBody = $('#booksBody');
        tableBody.empty();
        console.log(data);
        for (let book in data) {
            let title = data[book].Title;
            let author = data[book].Author;
            let description = data[book].description;

            if (description == undefined) {
                description = 'This book has no description';
            }
            if (author == undefined) {
                author = 'The book author is unknown';
            }
            if (title == undefined) {
                title = 'The book title is undefined';
            }

            let row = $('<tr/>');
            let rowTitle = $('<td/>');
            rowTitle.text(title);
            let rowAuthor = $('<td/>');
            rowAuthor.text(author);
            let rowDescription = $('<td/>');
            rowDescription.text(description);
            let rowAction = $('<td/>');
            if (localStorage.getItem('creator') === data[book]._acl.creator) {
                let deleteButton = $('<button/>');
                deleteButton.addClass('deleteBtn');
                deleteButton.attr('id', data[book]._id);
                deleteButton.html('&#10008;');
                rowAction.append(deleteButton);
            }

            row.append(rowTitle);
            row.append(rowAuthor);
            row.append(rowDescription);
            row.append(rowAction);
            tableBody.append(row);
        }
    }
    
    function createBook() {
        $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/Books',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            },
            method: 'POST',
            data: {
                Title: $('#bookTitle').val(),
                Author: $('#bookAuthor').val(),
                description: $('#bookDescription').val()
            }
        }).then(showView('List books'))
            .catch(errorLog);

        $('#bookTitle').val('');
        $('#bookAuthor').val('');
        $('#bookDescription').val('');
    }

    function deleteBook(id) {
        $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/Books/' + id,
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('authtoken')
            },
            method: 'DELETE'
        }).then(showView('List books'))
            .catch((data) => console.log(data));
    }

    //Help functions 

    function errorLog() {
        hideAllSection();

        let div = $('<div/>');
        let img = $('<img/>', {
            src: 'errorReg.jpg'
        });
        div.text('Something went wrong. Please try again');
        div.append(img);
        div.appendTo('main');

        setTimeout(() => (
            div.detach(),
            showView('Home')
        ), 1500)
    }
});
