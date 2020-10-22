/**
 * 
 * ESERCIZIO 1 - Costruire una funzione per capire se la parola inserita è palindroma
 * 
 */

//  1. Raccolgo l'input, la parola

// var parola = prompt('Inserisci una parola da verificare!').toLowerCase().trim();
// var inverso = invertText(parola);

// document.getElementById('userIns').innerHTML = parola;
// document.getElementById('pcOut').innerHTML = inverso;


// if (parola == inverso) {
//     document.getElementById('palindroma').innerHTML = 'La parola inserita è palindorma!';
// } else {
//     document.getElementById('palindroma').innerHTML = 'La parola inserita  non è palindorma!';
// }

// // Definizione Funzione

// function invertText(word) {

//     var risultato ='';    
//     for ( var i = word.length - 1; i >= 0; i--) {
//         risultato += word[i];
//     }

//     return risultato;
// }


/***************************************************************************** */
/**
 * 
 * ESERCIZIO 2 - L'utente sceglie pari o dispari
 * L'utente inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
 * 
 */


//  1. Acquisizione scelta utente
var numMin = 1;
var numMax = 5;

play.addEventListener('click', function() {

    var numUser = parseInt( prompt('Inserisci un numero da 1 a 5') );
    while (( numUser < numMin) || (numUser > numMax)) {
        numUser = parseInt( prompt('Inserisci un numero da 1 a 5') );
    }

    // 2. Generazione numero random, tramite funzione RandomNum()

    numCom = randomNum(numMin,numMax);
    totale = numUser + numCom;

    var finale = paridispari(totale);
    var scelta = document.getElementById('ped').value;

    if (scelta == finale) {
        alert('Vince il giocatore!');
    } else {
        alert('Vince il COM!');
    }

    console.log(numUser);
    console.log(numCom);
    console.log(scelta);
    console.log(totale);
    console.log(finale);

}
);


// Definizione Funzione RandomNum
function randomNum(min,max) {
    var num = '';
    return num = Math.round( Math.random() * max ) + min;
}

// Definizione funzione paridispari
function paridispari(value) {
    if (value % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}