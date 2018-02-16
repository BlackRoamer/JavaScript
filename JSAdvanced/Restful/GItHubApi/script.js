$(document).ready(() => {
    const username = $('#usrName');
    const list = $('<ul/>');

    const button = $('#sbtbut');

    button.on('click', sendRequest);

    function sendRequest() {
        list.text('Loading...');
        button.attr('disabled', true);
        let user = username.val();
        if (user != ' ') {

            $.ajax({
                url: `https://api.github.com/users/${user}/repos`,
                method: 'GET',
                success: dispalyRepos,
                error: displayErr,

            });
        }
        username.val('');

    }
    function emptyList() {
        list.empty();
        button.attr('disabled', false);
    }
    function displayErr(data) {
        emptyList();
        list.append(`<li>${data.statusText}</li>`);

    }

    function dispalyRepos(data) {
        emptyList();
        console.log(data[0].html_url);
        for (let repos of data) {
            let emptyLi = $('<li/>');
            emptyLi.html(`<a href=${repos.html_url} target=_blank>${repos.name}</a>`);
            list.append(emptyLi);
        }
    }
    $('body').append(list);
});
