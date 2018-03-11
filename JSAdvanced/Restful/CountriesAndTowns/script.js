$(() => {

    const username = 'guest';
    const url = 'https://baas.kinvey.com/appdata/kid_r14VSLWdz/';
    const header = {
        'Authorization': 'Basic ' + btoa(username + ':' + username)
    }

    //DOM Elements
    let deleteBtn = $('#select');
    let countriesList = $('#countries');
    let townsList = $('#towns');
    let loading = $('<option>', {
        text: 'Loading...'
    });
    let inputCountry = $('#addCountry');
    let submitCountry = $('#createCountry');
    let inputTown = $('#townName');
    let submitTown = $('#createTown');

    //Execute

    getCountries();

    inputCountry.on('click', clearInputCountry);
    submitCountry.on('click', addCountry);
    deleteBtn.on('click', deleteCountry);
    countriesList.on('change', getTowns);
    submitTown.on('click', addTown);
    townsList.on('click', 'button', deleteTown);


    //Countries

    function getCountries() {
        countriesList.empty();
        disableButtons();
        countriesList.append(loading);
        $.ajax({
            url: url + 'Countries',
            headers: header,
            method: 'GET'
        })
            .then(displayCountries)
            .catch(errorCountries)
            .always(enableButtons);

    }

    function displayCountries(data) {
        countriesList.children().first().detach();
        for (let country of data) {
            countriesList.append($('<option>', {
                text: country.name
            }));
        }
    }

    function errorCountries(err) {
        countriesList.html($('<option>', {
            text: err.statusText
        }));
    }

    function addCountry() {
        disableButtons();
        let countryName = inputCountry.val();
        let options = Array.from(countriesList.children());

        if (!options.some(option => $(option).text().toUpperCase() === countryName.toUpperCase())) {

            $.ajax({
                url: url + 'Countries/',
                headers: header,
                method: 'POST',
                dataType: 'application/json',
                data: {
                    name: countryName
                }
            }).always(getCountries);
        }
        clearInputCountry();
    }

    function deleteCountry() {
        disableButtons();
        let country = countriesList.val();
        $.ajax({
            url: url + `Countries?query={"name":"${country}"}`,
            headers: header,
            method: 'DELETE'
        }).then(getCountries)
            .always(enableButtons);
    }

    //Towns

    function getTowns() {
        townsList.empty();
        disableButtons();
        townsList.append($('<li>', {
            text: 'Loading...'
        }));
        let country = countriesList.val();
        $.ajax({
            url: url + 'Towns' + `?query={"country":"${country}"}`,
            headers: header,
            method: 'GET'
        })
            .then(displayTowns)
            .catch(errorTowns)
            .always(alwaysTowns);
    }

    function displayTowns(data) {
        let deleteButton = $('<button>');
        deleteButton.text('Delete');

        for (let town in data) {
            townsList.append($('<li>', {
                text: data[town].name
            }));
        }

        townsList.children().append(deleteButton);

    }

    function errorTowns(err) {

        townsList.append($('<li>', {
            text: 'ERROR: ' + err.responseJSON.error
        }));
    }

    function addTown() {
        let countryName = countriesList.val();
        let townName = inputTown.val();
        $.ajax({
            url: url + 'Towns',
            headers: header,
            method: 'POST',
            dataType: 'application/json',
            data: {
                country: countryName,
                name: townName
            }
        }).always(getTowns);
        inputTown.val('');
    }


    function deleteTown() {
        disableButtons();

        let li = $(this).parent()[0];
        let townName = li.firstChild.data;

        $.ajax({
            url: url + `Towns?query={"name":"${townName}"}`,
            headers: header,
            method: 'DELETE'
        }).then(getTowns)
            .always(enableButtons);


    }

    function alwaysTowns() {
        townsList.children().first().detach();
        enableButtons();
    }

    // Help methods
    function clearInputCountry() {
        inputCountry.val('');
    }

    function disableButtons() {
        deleteBtn.prop('disabled', true);
        submitCountry.prop('disabled', true);
        submitTown.prop('disabled', true);
    }

    function enableButtons() {
        deleteBtn.prop('disabled', false);
        submitCountry.prop('disabled', false);
        submitTown.prop('disabled', false);
    }
});