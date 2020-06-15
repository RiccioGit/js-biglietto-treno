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

document.getElementById('full-price').innerHTML = "La tariffa scontata per il tuo percorso é " + finalPrice.toFixed(2) + " Euro";
