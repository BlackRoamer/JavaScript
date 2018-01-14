function loadContatcts() {
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', function () {
        let list = $('#phonebook');
        $.ajax({
            type: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success: function (result) {
                list.empty();
                let keys = Object.keys(result);
                for (let i = 0; i < keys.length; i += 1) {
                    let key = keys[i];
                    let li = document.createElement('li');
                    li.id = keys[i];
                    li.innerText = `${((result[key])).person} ${result[key].phone}`;
                    let button = document.createElement('button');
                    button.className = 'del';
                    button.innerText = 'Delete';
                    li.appendChild(button);
                    list.append(li);
                }
                let buttons = document.getElementsByClassName('del');
                let arr = Array.from(buttons);
                arr.forEach(x => x.addEventListener('click', function () {
                    let keyOfLi = this.parentNode.id;
                    $.ajax({
                        method: 'DELETE',
                        url: `https://phonebook-nakov.firebaseio.com/phonebook/${keyOfLi}.json`,
                        success: function (result) {
                            result.empty();
                        },
                        error: function() {
                            console.log('ERROR: Can not delete the user');
                        }
                    });
                }));

                let textRes = JSON.stringify(result);
            }
        });
    });
}

function createContact() {
    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', function () {
        let personName = $('#person').val();
        $('#person').val('');
        let personPhone = $('#phone').val();
        $('#phone').val('');
        $.ajax({
            method: 'POST',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
            data: JSON.stringify({ person: personName, phone: personPhone }),
            success: function () {
                console.warn('User added');
            },
            error: function () {
                console.log('ERROR: Can not add user');
            }
        });
    });
}
loadContatcts();
createContact();