/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
e l’età del passeggero.
Sulla base di queste informazioni dovrà:
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Come detto un minimo di ricerca vostra per rendere l’ex migliore ci sarà
e sarà la questione di come poter dare un output di prezzo reale e umano.
Ovvero all’utente non stò a chiedere centesimi o microcentesimi sul prezzo (es. € 10, 32486848236588365868345636956435863458465989459 e pretendo tutte le monete, no!)
ma gli dò un output umano, magari fisso a 2 decimali (es. € 10.32). */

// ** Richiesta informazioni dell'utente **

  // Dati personali:

var name = prompt("Inserisci il tuo nome");

var familyName = prompt("Inserisci il tuo cognome");

var age = prompt("Quanti anni hai?");

console.log(age)

  // Dati del viaggio:

var km = prompt("Quanti KM è distante la tua destinazione?");

// **Elaborazione del prezzo per km

var price = km * 0.21;

// ** Mostriamo all'utente il prezzo NON scontato **

document.getElementById('full-price').innerHTML = "La tariffa intera per il tuo percorso é " + price + " Euro";

// ** Calcolo della scontistica **

if (age < 18) {
  var discount = price / 100 * 20;
  var finalPrice = price - discount;
} else if (age > 65) {
  var discount = price / 100 * 40;
  var finalPrice = price - discount;
} else {
  var finalPrice = price;
}

console.log(discount)
console.log(finalPrice);

// ** Ora mostriamo il prezzo eventualmente scontato

document.getElementById('full-price').innerHTML = "La tariffa intera per il tuo percorso é " + finalPrice + " Euro";
