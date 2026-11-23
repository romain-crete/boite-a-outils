// ============================================
// Ma Boîte à Outils JavaScript
// Projet fil rouge — Premiers pas avec JavaScript
// ============================================

// === Configuration ===
const NOM_OUTIL = "Ma Boîte à Outils JavaScript";
const VERSION = "1.0";
const AUTEUR = "Romain";
const ANNEE = 2026;

let nombreFonctions = 10;

// === MESSAGE DE BIENVENUE ===
console.log(`${NOM_OUTIL} v${VERSION} — Par ${AUTEUR} — ${ANNEE}`);
console.log(`${nombreFonctions} fonction(s) disponible(s). Tapez aide() !`);


// ---------Affichage Nom Fonction

function aide() {
      console.log("");
  console.log(
    `=== ${NOM_OUTIL} v${VERSION} — ${nombreFonctions} fonctions ===`,
  );
  console.log("convertirCelsiusEnFahrenheit(celsius) → Convertit °C en °F");
  console.log("convertirFahrenheitEnCelsius(fahrenheit) → Convertit °F en °C");
  console.log("verifierParite(nombre) → Retourne 'pair' ou 'impair'");
  console.log("genererTableMultiplication(nombre) → Affiche la table (1 à 10)");
  console.log("jouerFizzBuzz(limite) → Joue à FizzBuzz de 1 à limite");
  console.log("aide() → Affiche ce menu d'aide");
  console.log("calculerMoyenne → calcule la moyenne de nombres d'un tableau");
  console.log("trouverMaximum → repère le nombre maximum d'une liste");
  console.log("trouverMinimum → repère le nombre minimum  d'une liste");
  console.log("filtrerNombrePairs → repère les nombres pairs d'une liste");
  console.log("");
}

aide();

// =============FONCTIONS=============

const nombre = 8;
const celsius = 35;
const limite = 30;

// conversion température

function convertirCelsiusEnFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertirFahrenheitEnCelsius(temperatureFahrenheit) {
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
  for (let i = 1; i <= 10; i++) {
    calcul += `${nombre}x${i}=${nombre * i}\n`;
  }
  return calcul;
}

// Jeu FizzBuzz

function jouerFizzBuzz(limite) {
  let nbreFizzBuzz = 1;

  while (nbreFizzBuzz <= limite) {
    if (nbreFizzBuzz % 3 === 0 && nbreFizzBuzz % 5 === 0) {
      console.log("FizzBuzz");
    } else if (nbreFizzBuzz % 3 === 0) {
      console.log("Fizz");
    } else if (nbreFizzBuzz % 5 === 0) {
      console.log("Buzz");
    } else console.log(nbreFizzBuzz);
    nbreFizzBuzz++;
  }
}

// ------------Test Fonctions-------

console.log("--- Tests fonctions---");

let temperatureFahrenheit = convertirCelsiusEnFahrenheit(celsius);
console.log("Température en °F = " + temperatureFahrenheit);

let temperatureCelsius = convertirFahrenheitEnCelsius(temperatureFahrenheit);
console.log("Température en °C = " + temperatureCelsius);

console.log("Le nombre est : " + verifierParite(nombre));

let table = genererTableMultiplication(nombre);

console.log(table);

jouerFizzBuzz(limite);

//=============== Fonctions avec tableau ==============

// déclaration des variables

const tableauA = [15, 12, 18, 9, 14];
const tableauB = [20, 20, 20];
const tableauC = [3, 7, 2, 9, 1];
const tableauD = [1, 2, 3, 4, 5, 6];
const tableauE = [7, 14, 21, 28];
const tableauteste = tableauA; //ou autre tableau

console.log("--- Tests fonctions tableaux ---");

// fonction calculer moyenne

function calculerMoyenne(tableauteste) {
  let somme = 0;
  for (let i = 0; i < tableauteste.length; i++) {
    somme += tableauteste[i];
  }
  let moyenne = somme / tableauteste.length;
  return moyenne;
}
const moyenneNotes = calculerMoyenne(tableauteste);
console.log(`La moyenne de l'élève est : ${moyenneNotes}`);

// fonction trouver le nombre maximum d'un tableau

function trouverMaximum(tableauteste) {
  let maximum = tableauteste[0];
  for (let i = 1; i < tableauteste.length; i++) {
    if (tableauteste[i] > maximum) {
      maximum = tableauteste[i];
    }
  }
  return maximum;
}

let nbreMaximum = trouverMaximum(tableauteste);
console.log(`Le nbre maximum est : ${nbreMaximum}`);

// fonction trouver le nbre minimum d'un tableau

function trouverMinimum(tableauteste) {
  let minimum = tableauteste[0];
  for (let i = 1; i < tableauteste.length; i++) {
    if (tableauteste[i] < minimum) {
      minimum = tableauteste[i];
    }
  }
  return minimum;
}

let nbreMinimum = trouverMinimum(tableauteste);
console.log(`Le nbre minimum est : ${nbreMinimum}`);

// fonction filtrer les Nombres pairs d'un tableau

function filtrerNombrePairs(tableauteste) {
  let nombresPairs = [];

  for (let i = 0; i < tableauteste.length; i++) {
    if (tableauteste[i] % 2 === 0) {
      nombresPairs.push(tableauteste[i]);
    }
  }
  return nombresPairs;
}

let nombrePairFiltre = filtrerNombrePairs(tableauteste);
console.log(`Les nbres pairs du tableau sont : ${nombrePairFiltre}`);
