function solve() {
    let info = $('#info span');
    let data = { next: 'depot' };
    let currentStation = '';
    let departBtn = $('#depart');
    let arriveBtn = $('#arrive');
    function depart() {

        let firstRequest = new XMLHttpRequest();

        firstRequest.onreadystatechange = function () {

            let requestResponse = firstRequest.responseText;
            let resultParsed = JSON.parse(requestResponse);

            let stationName = resultParsed.name;
            currentStation = stationName;
            // let nextStation = resultParsed.next;

            data = resultParsed;
            info.text(`Next stop ${stationName}`);

            departBtn.prop('disabled', true);

            arriveBtn.prop('disabled', false);

        };
        firstRequest.open('GET', `https://judgetests.firebaseio.com/schedule/${data.next}.json`, true);
        firstRequest.send();

    }
    function arrive() {
        info.text(`Arriving at ${currentStation}`);
        departBtn.prop('disabled', false);
        arriveBtn.prop('disabled', true);

    }
    return {
        depart,
        arrive
    };

}
let result = solve();