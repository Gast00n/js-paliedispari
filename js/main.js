/**
 * 
 * ESERCIZIO 1 - Costruire una funzione per capire se la parola inserita è palindroma
 * 
 */

//  1. Raccolgo l'input, la parola

var parola = prompt('Inserisci una parola da verificare!').toLowerCase().trim();
var inverso = invertText(parola);

document.getElementById('userIns').innerHTML = parola;
document.getElementById('pcOut').innerHTML = inverso;


if (parola == inverso) {
    document.getElementById('palindroma').innerHTML = 'La parola inserita è palindorma!';
} else {
    document.getElementById('palindroma').innerHTML = 'La parola inserita  non è palindorma!';
}





// Definizione Funzione

function invertText(word) {

    var risultato ='';    
    for ( var i = word.length - 1; i >= 0; i--) {
        risultato += word[i];
    }

    return risultato;
}

