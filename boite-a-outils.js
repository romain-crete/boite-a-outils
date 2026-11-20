// ============================================
// Ma Boîte à Outils JavaScript
// Projet fil rouge — Premiers pas avec JavaScript
// ============================================


const NOM_OUTIL="Ma Boîte à Outils Javascript";
const VERSION="1.0";
const AUTEUR="Romain";
const ANNEE=2026;

let nombreFonctions = 9;


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




// Bloc 1 — Vérifier si un nombre est pair ou impair :

const nombreAVerifier = 7;

let verification = nombreAVerifier%2===0 ? console.log ( `le nombre ${nombreAVerifier} est pair`) : console.log ( `le nombre ${nombreAVerifier} est impair`);


// Bloc 2 — Catégoriser un âge :

const agePersonne = 70;

if ( agePersonne <= 11 ){
    console.log("enfant");
}else if (agePersonne<= 17 ){
    console.log("adolescent");
}else if (agePersonne<=64){
    console.log("adulte");
}else {
    console.log("senior");
}

// Bloc 3 — Vérifier la force d'un mot de passe :

const motDePasse = "azerty"

if (motDePasse.length <6 ){
    console.log("Faible , le mot de passe doit être plus long");
}else if (motDePasse.length <=9){
    console.log("Moyen, le mot de passe doit être plus long ");
}else {
    console.log("Fort,votre mot de passe est d'une longeur suffisante")
}


// Programme 1 — Table de multiplication

const nombreTable =8

console.log(`========TABLE DE MULTIPLICATION DE ${nombreTable} ======`)

for (let i=1;i<=9;i++){
    console.log(`${nombreTable}x${i}=${nombreTable*i}`);
}

console.log("=======================")

// Programme 2 — Compter les voyelles

const mot ="javascript"
let nbreVoyelles=0
for ( let i=0;i<mot.length;i++){
if (mot[i]==="a"||mot[i]==="e"||mot[i]==="i"||mot[i]==="o"||mot[i]==="u"){
nbreVoyelles++
}}
console.log(`Nombre de voyelles : ${nbreVoyelles}`)

console.log("=======================")

// Programme 3 — Motif d'étoiles

const hauteur=5;
console.log("=== MOTIF D'ÉTOILES ===");
for (let i=1 ;i<=hauteur;i++){
    let etoile="";
    for (let j=1;j<=i;j++){
        etoile += "*"}
        console.log(etoile);
}

console.log("=======================")




