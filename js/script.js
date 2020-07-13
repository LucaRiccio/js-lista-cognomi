// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var cognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
var cognomeUtente = prompt("Inserisci il tuo cognome");
var parola = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();
cognomi.push (parola);
cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('lista').innerHTML += "<li>" + cognomi[i] + "</li>";
}

var posizione = cognomi.indexOf(parola) + 1;
console.log(posizione);
