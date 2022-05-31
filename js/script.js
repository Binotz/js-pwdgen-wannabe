//Data input
const firstName = prompt("Ciao, inserisci il tuo nome: ");
const lastName = prompt("Ciao, inserisci il tuo cognome: ");
const color = prompt("Ciao, inserisci il tuo colore preferito: ");

//Password generation
let password = 'Ecco la tua nuova password super segreta: ' + firstName + lastName + color +'21';

//Data output
document.getElementById('pass').innerHTML = password;
