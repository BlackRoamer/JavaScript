function getWeather() {
    let submitBtn = document.getElementById('submit');
    let inputBox = document.getElementById('location');
    submitBtn.addEventListener('click', function () {
        let input = inputBox.value;
        inputBox.value = '';
        $.get('https://judgetests.firebaseio.com/locations.json')
            .then(success)
            .catch(error);
        function success(result) {
            let specialCode = '-1';
            for (let i = 0; i < result.length; i += 1) {
                if (result[i].name === input) {
                    specialCode = result[i].code;
                    break;
                }
            }

            $.get(`https://judgetests.firebaseio.com/forecast/today/${specialCode}.json`)
                .then(succesTodayWeather)
                .catch(errorTodayWeather);

            $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${specialCode}.json`)
                .then(successTomorrowWeather)
                .catch(errorTomorrowWeather);
            function successTomorrowWeather(res) {
                let upcoming = $('#upcoming');
                let list = $('<ul/>');
                list.css('list-style-type', 'none');
                list.css('display','block');
                
                for(let i = 0; i < result.length; i+=1) {
                    console.log(res[i]);
                    list.append(`<li>${res.forecast[i].condition}</li>`);
                list.append(`<li>${res.forecast[i].high}° / ${res.forecast[i].low}°</li>`);
                }
                
                list.insertAfter(upcoming);
            }
            function errorTomorrowWeather(err) {
                console.log('Problem with the request');
            }

            function succesTodayWeather(res) {
                let currentWeather = $('#current'); 
                $('#error').remove();
                if(res == null) {
                  let div = $('<div>');
                  div.text('Invalid or Missing city');
                  div.attr('id', 'error');
                  div.css('color', 'red');
                  div.insertAfter(currentWeather);
                }
               
                let showOutput = $('#forecast');
                showOutput.css("display", "block");
               
                let list = $('<ul/>');
                list.css('list-style-type', 'none');
                list.append(`<li>${res.name}</li>`);
                list.append(`<li>${res.forecast.condition}</li>`);
                list.append(`<li>${res.forecast.high}° / ${res.forecast.low}°</li>`);
                list.insertAfter(currentWeather);
                
               
               
            }
            function errorTodayWeather(err) {
                console.log('Problem with the request');
            }

        }
        function error(err) {
            console.log('Error with the request');
        }
    });
}
getWeather();