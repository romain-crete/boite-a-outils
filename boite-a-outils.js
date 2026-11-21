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

console.log("============")




// Programme 1 — Table de multiplication

for (let i=1; i<=10;i++ ){
    console.log(i);
}
const nombreTable =8

for (let j=5 ; j<=15;j++){
    console.log(j);}
console.log(`========TABLE DE MULTIPLICATION DE ${nombreTable} ======`)

for (let i=10;i !=-1;i--){
    if (i!=0){
        console.log(i);
    }else console.log("go!");
}


for (let i=1;i<=9;i++){
    console.log(`${nombreTable}x${i}=${nombreTable*i}`);
}

console.log("=======================")

// Programme 2 — Compter les voyelles

for (let i=1 ; i<=30;i++){
  if (i%3===0)
   {console.log("multiple de 3 :"+i);}
}

const mot ="javascript"
let nbreVoyelles=0
for ( let i=0;i<mot.length;i++){
if (mot[i]==="a"||mot[i]==="e"||mot[i]==="i"||mot[i]==="o"||mot[i]==="u"){
nbreVoyelles++
}}
console.log(`Nombre de voyelles : ${nbreVoyelles}`)

for (let i=1;i<=5;i++){
    console.log(`Ligne ${i}`)
}
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




//============ programmes boucle while

// Programme 1 — FizzBuzz (1 à 30)


let nbreFizzBuzz = 1;

while (nbreFizzBuzz <=30){
    if (nbreFizzBuzz%3===0 && nbreFizzBuzz%5===0){
        console.log("FizzBuZZ");
    } else if ( nbreFizzBuzz%3===0){
        console.log("Fizz");
    }else if (nbreFizzBuzz%5===0){
        console.log("Buzz");
    }else console.log(nbreFizzBuzz)
    nbreFizzBuzz++
}

console.log("============")

// Programme 2 — Deviner un nombre (mini-jeu)

let nbreSecret= Math.floor(Math.random()*50+1);
let nbreTenatives=0;
let nbreJoueur=0;

while ( nbreSecret !== nbreJoueur){

 nbreJoueur= Number(prompt("Choisissez un nombre entre 1 et 50"));
    nbreTenatives++;

    if (nbreJoueur>nbreSecret){
        console.log("Trop Haut")
    }else if (nbreJoueur<nbreSecret){
        console.log("Trop bas")
    }else  break
}
console.log(`Bravo vous avez trouvé en ${nbreTenatives} tentatives . `)

// Programme 3 — Calculer une puissance sans **

let puissance10=1;
let base2=2;

while (puissance10 <10){
    console.log(base2 = base2*2);
    puissance10++
}
console.log("============")

let puissance5=1;
let base3=3;

while (puissance5 <5){
    console.log( base3 = base3*3);
    puissance5++
}
