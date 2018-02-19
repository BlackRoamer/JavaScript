$(document).ready(() => {

    const list = $('#contacts');
    const url = 'https://phonebook-21259.firebaseio.com/';
    const submit = $('#crtContact');

    submit.on('click', createContact);

    let listContacts = function getContacts() {
        let loading = $('<li/>');
        loading.attr('id', 'loading');
        loading.text('Loading...');
        list.prepend(loading);
        $.ajax({
            url: `${url}.json`,
            method: 'GET',
            success: displayContacts,
            error: showError
        });
    };

    listContacts();

    function createContact() {
        let name2 = $('#contactName').val();
        let phone = $('#contactNum').val();
        let contact = {
            Name: name2,
            Phone: phone

        }
        $.ajax({
            url: `${url}.json`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(contact),
            success: listContacts
        });
        $('#contactName').val('');
        $('#contactNum').val('');

    }

    function deleteContact(contact) {
        $.ajax({
            url: `https://phonebook-21259.firebaseio.com/${contact}.json`,
            method: 'DELETE',
            success: listContacts

        });
    };

    function displayContacts(data) {
        list.empty();
        for (let contacts in data) {
            let li = $('<li/>');
            li.append(JSON.stringify(data[contacts].Name + ': ' + data[contacts].Phone));
            li.append($(`<button>Delete</button>`).click(() => deleteContact(contacts)));

            list.append(li);
        }
    }
    
    function showError(data) {
        console.log('err');
    }
});