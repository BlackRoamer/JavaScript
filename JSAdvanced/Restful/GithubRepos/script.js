$(document).ready(() => {

    const list = $('#commits');
    const submit = $('#loadCommits');
    const baseURL = 'https://api.github.com/repos';

    submit.on('click', () => {
       
        loading();
        
        let username = $('#username').val();
        let repo = $('#repo').val();

        $.get(`${baseURL}\\${username}\\${repo}\\commits`)
            .then(displayCommits)
            .catch(displayErr)
            .always(clearAlways);

    });

    function displayCommits(data) {

        console.log(data);
        for (commit of data) {
            console.log(commit.commit);
            let li = $('<li/>');
            li.html(`${commit.commit.author.name}: ${commit.commit.message}`);
            list.append(li);
        }
    }

    function displayErr(data) {
        list.append((data.status + ' ' + data.responseJSON.message));
    }

    function clearAlways() {
        submit.prop('disabled', false);
        $('#first').detach();
    }

    function loading() {
        list.empty();
        list.append('<li id=first>Loading...</li>');
        submit.prop('disabled', true);
    }
});