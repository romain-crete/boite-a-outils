// ============================================
// Ma Boîte à Outils JavaScript
// Projet fil rouge — Premiers pas avec JavaScript
// ============================================


const NOM_OUTIL="Ma Boîte à Outils Javascript";
const VERSION="1.0";
const AUTEUR="Romain";
const ANNEE=2026;

let nombreFonctions = 3;


console.log(`

╔══════════════════════════════════════════╗
║    ${NOM_OUTIL} ${VERSION}      ║
║            Par ${AUTEUR} — ${ANNEE}             ║
╠══════════════════════════════════════════╣
║       Tapez aide() pour voir les         ║
║        ${nombreFonctions} fonctions  disponibles          ║
╚══════════════════════════════════════════╝

`);


// Convertisseur de température (°C → °F) :

const temperatureCelius = 30;
let temperatureFahrenheit =temperatureCelius*9/5+32;
let conversion = `${temperatureCelius}°C = ${temperatureFahrenheit}°F`;

console.log(conversion);

// Calculateur de pourcentage :

const montantTotal = 170;
const pourcentage= 20;

let montantPourcentage = montantTotal*pourcentage/100;

let message = `${pourcentage}% de ${montantTotal} = ${montantPourcentage}`;

console.log(message);

// Calculateur d'IMC (Indice de Masse Corporelle) :

const poids = 106;
const taille = 1.83;

let IMC = poids/(taille*taille);
let plageNormal = IMC >= 18.5 && IMC <= 25;

let balance = `Votre IMC est de ${IMC} . Etes vous dans la plage normale ? => ${plageNormal} `;

console.log(balance);

