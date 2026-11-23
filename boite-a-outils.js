// ============================================
// Ma Boîte à Outils JavaScript
// Projet fil rouge — Premiers pas avec JavaScript
// ============================================


// === Configuration ===
const NOM_OUTIL = "Ma Boîte à Outils Javascript";
const VERSION = "1.0";
const AUTEUR = "Romain";
const ANNEE = 2026;

let nombreFonctions = 6;

// === MESSAGE DE BIENVENUE ===
console.log(`${NOM_OUTIL} v${VERSION} — Par ${AUTEUR} — ${ANNEE}`);
console.log(`${nombreFonctions} fonction(s) disponible(s). Tapez aide() !`);


// =============FONCTIONS=============

const nombre = 8;
const celsius = 35;
const limite = 30;


// conversion température

function convertirCelsiusEnFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertirFahrenheitEnCelsius() {
  return ((temperatureFahrenheit - 32) * 5) / 9;
}

// vérification de parité

function verifierParite(nombre) {
  let verification = nombre % 2 === 0 ? "pair" : "impair";
  return verification;
}


// Table de multiplication

function genererTableMultiplication(nombre) {
  let calcul = "";
  for (let i = 1; i <= 9; i++) {
    calcul += `${nombre}x${i}=${nombre * i}\n`;
  }
  return calcul;
}


// Jeu FizzBuzz

function jouerFizzBuzz(limite){
    let nbreFizzBuzz = 1;

while (nbreFizzBuzz <= limite) {
  if (nbreFizzBuzz % 3 === 0 && nbreFizzBuzz % 5 === 0) {
    console.log("FizzBuZZ");
  } else if (nbreFizzBuzz % 3 === 0) {
    console.log("Fizz");
  } else if (nbreFizzBuzz % 5 === 0) {
    console.log("Buzz");
  } else console.log(nbreFizzBuzz);
  nbreFizzBuzz++;
}
}



// ---------Affichage Nom Fonction

function aide() {
    console.log(`=== ${NOM_OUTIL} v${VERSION} — ${nombreFonctions} fonctions ===`);
    console.log("convertirCelsiusEnFahrenheit(celsius) → Convertit °C en °F");
    console.log("convertirFahrenheitEnCelsius(fahrenheit) → Convertit °F en °C");
    console.log("verifierParite(nombre) → Retourne 'pair' ou 'impair'");
    console.log("genererTableMultiplication(nombre) → Affiche la table (1 à 10)");
    console.log("jouerFizzBuzz(limite) → Joue à FizzBuzz de 1 à limite");
    console.log("aide() → Affiche ce menu d'aide");
}

aide()


let temperatureFahrenheit = convertirCelsiusEnFahrenheit(celsius);
console.log("Temperature en F° = " + temperatureFahrenheit);

let temperatureCelsius = convertirFahrenheitEnCelsius(temperatureFahrenheit);
console.log("Temperature en C° = " + temperatureCelsius);

console.log("Le nombre est : " + verifierParite(nombre));

let table = genererTableMultiplication(nombre);

console.log(table);

jouerFizzBuzz(limite);





