
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
document.getElementById('numero').innerHTML = "Posizione del nuovo cognome nella lista: " + posizione;
