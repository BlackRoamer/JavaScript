function takeInput() {

    let submit = document.getElementById('submit');
    let inputBox = document.getElementById('inputbox');
    let output = document.getElementById('output');

    submit.addEventListener('click', function () {

        let input = inputBox.value;
    
        output.innerText = input;     
        inputBox.value = '';

        $.get(`https://www.duden.de/suchen/dudenonline/${input}`)
        .then(succes)
        .catch(error);
        function succes(res) {
            console.log(JSON.stringify(res));
        }
        function error() {

        }

    });
    inputBox.addEventListener('keydown', function (e) {
        let key = e.keyCode;
        if (key === 13) {
            let input = inputBox.value;
            output.innerText = input;
            inputBox.value = '';
        }
    })
}

takeInput();

// takeInput();
// function testExtension() {
//     let div = document.getElementById('test');
//     div.addEventListener('click', function() {
//         div.value = 'I MADE IT';

//         let input = document.createElement('input');
//         input.setAttribute('type','text');
//         input.setAttribute('value','Enter word');
//         document.body.appendChild(input);

//     });
// }
// testExtension();