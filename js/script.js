/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.
*/


let numbersContainer = document.querySelector('.numbersContainer');

let countdown = document.querySelector('.countdown');

let startGame = document.querySelector('.startGame');

let numbersArray = [];

let userArray = [];

timer = 30;


startGame.addEventListener('click', function() {

    for (let index = 0; index < 5; index++) {
        let randomNum = Math.floor(Math.random() * 100);
        numbersArray.push(randomNum);    
    }
    numbersContainer.innerHTML = numbersArray;
    
    const clock = setInterval(function() {
        timer--;
        countdown.innerHTML = timer;
        if (timer == 0) {
            clearInterval(clock);
            numbersContainer.innerHTML = '';
        }
    }, 1000);
    
    setTimeout(message, 32000)
});

function message() {
    for (let index = 0; index < 5; index++) {
        userArray.push = parseInt(prompt('inserisci i numeri memorizzati'));
    }

        if(userArray == numbersArray) {
            alert('Hai memoria!')
        } else {
            alert('Ritenta :/')
        }
        console.log(userArray)
}
