// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.



// 1 Chiedere all'utente quanti km deve percorrere e stampare

const distanza = parseInt(prompt('Inserisci il numero di km che devi percorrere')); //number
console.log(distanza);


// 2 Chiedere l'eta del passeggero e stampare

const age = parseInt(prompt('Inserisci la tua età')); //number
console.log(age);


// 3 Calcolare il prezzo totale del viaggio in base all'età del passeggero
const prezzo = 0.21; //number

let total = distanza * 0.21; //number

// SE il passeggero è minorenne avrà uno sconto del 20%

let sconto;

if(age < 18) {
    sconto = total * 0.20;
    total = total - sconto;
    console.log(total.toFixed(2));
}

// ALTRIMENTI SE il passeggero è un over 65 avrà uno sconto del 40%

 else if(age > 65) {
    sconto = total * 0.40;
    total = total - sconto;
    console.log(total.toFixed(2));
 }

// ALTRIMENTI stampa il prezzo fisso

 else {
    console.log(total);
 }