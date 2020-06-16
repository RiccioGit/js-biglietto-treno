// ** Richiesta informazioni dell'utente **

  // Dati personali:

var name = prompt("Dichiarate lo vostro nome, Messere/Madama");

var familyName = prompt("Dichiarate lo nome della vostra casata");

var age = prompt("Dichiarate la vostra età");

console.log(age)

document.getElementById('age').innerHTML = "Nacque: " + age + " anni orsono.";

  // Dati del viaggio:

var km = prompt("Ordunque, di quanti KM è distante la vostra destinazione?");

document.getElementById('name').innerHTML = "Distanza da percorrere: " + km + " km";

// **Elaborazione del prezzo per km

var price = km * 0.21;

// ** Mostriamo all'utente il prezzo NON scontato **

document.getElementById('full-price').innerHTML = "L'intera tariffa per lo vostro percorso in carrozza è " + price + " Fiorini";

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

document.getElementById('full-price').innerHTML = "La tariffa scontata per lo vostro percorso in carrozza è " + finalPrice.toFixed(2) + " Fiorini";

document.getElementById('name').innerHTML = "Messere / Madama: " + name + " " + familyName;
