// ============================================
// Ma Boîte à Outils JavaScript
// Projet fil rouge — Premiers pas avec JavaScript
// ============================================

// === Configuration ===
const NOM_OUTIL = "Ma Boîte à Outils JavaScript";
const VERSION = "1.0";
const AUTEUR = "Romain";
const ANNEE = 2026;

let nombreFonctions = 18;

console.log(`
╔══════════════════════════════════════════╗
║   ${NOM_OUTIL} v${VERSION}
║   Par ${AUTEUR} — ${ANNEE}
╠══════════════════════════════════════════╣
║   Tapez aide() pour voir les fonctions
║   ${nombreFonctions} fonction(s) disponible(s)
╚══════════════════════════════════════════╝
`);

// déclaration des variables
const total = 170;
const valeur = 20;
const poids = 106;
const taille = 1.83;
const mot = "maison";
const lignes = 5;
const base = 2;
const exposant = 10;
const nombre = 8;
const n = 30;
const age = 18;
const motDePasse = "password";
const celsius = 35;
const tableauA = [15, 12, 18, 9, 14];
const tableauB = [20, 20, 20];
const tableauC = [3, 7, 2, 9, 1];
const tableauD = [1, 2, 3, 4, 5, 6];
const tableauE = [7, 14, 21, 28];
const tableauteste = tableauA; //ou autre tableau
const obj1 = { couleur: "rouge", marque: "renault", annee: 1956 };
const obj2 = { Nom: "Jean", Age: 50, membre: true };

// ============================================
// FONCTIONS — CALCUL (Fiche 3)
// ============================================

// Convertit des degrés Celsius en Fahrenheit
function convertirCelsiusEnFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Calcule un pourcentage : (valeur / total) * 100
function calculerPourcentage(valeur, total) {
  return (valeur / total) * 100;
}

// Calcule l'IMC (Indice de Masse Corporelle)
function calculerIMC(poids, taille) {
  return poids / (taille * taille);
}

// ============================================
// FONCTIONS — CONDITIONS
// ============================================

// Vérifie si un nombre est pair ou impair
function verifierParite(nombre) {
  let verification = nombre % 2 === 0 ? "pair" : "impair";
  return verification;
}

// Catégorise un âge en tranche de vie
function categoriserAge(age) {
  if (age < 12) {
    return "enfant";
  } else if (age < 18) {
    return "adolescent";
  } else if (age < 65) {
    return "adulte";
  } else {
    return "senior";
  }
}

// Évalue la force d'un mot de passe selon sa longueur
function forceMdp(motDePasse) {
  const longueur = motDePasse.length;
  if (longueur < 6) {
    return "faible";
  } else if (longueur < 10) {
    return "moyen";
  } else {
    return "fort";
  }
}

// ============================================
// FONCTIONS — BOUCLE FOR
// ============================================

// Affiche la table de multiplication d'un nombre
function genererTableMultiplication(nombre) {
  let calcul = "";
  for (let i = 1; i <= 10; i++) {
    calcul += `${nombre}x${i}=${nombre * i}\n`;
  }
  return calcul;
}

// Compte les voyelles dans un mot
function compterVoyelles(mot) {
  const voyelles = "aeiouyAEIOUY";
  let compteur = 0;
  for (let i = 0; i < mot.length; i++) {
    if (voyelles.includes(mot[i])) {
      compteur++;
    }
  }
  return compteur;
}

// Affiche un motif d'étoiles en triangle
function motifEtoiles(lignes) {
  for (let i = 1; i <= lignes; i++) {
    let ligne = "";
    for (let j = 0; j < i; j++) {
      ligne += "*";
    }
    console.log(ligne);
  }
}

// ============================================
// FONCTIONS — BOUCLE WHILE
// ============================================

// Affiche le FizzBuzz de 1 à n
function jouerFizzBuzz(n) {
  let nbreFizzBuzz = 1;

  while (nbreFizzBuzz <= n) {
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

// Calcule la puissance d'un nombre sans utiliser **
function puissance(base, exposant) {
  let resultat = 1;
  let compteur = 0;
  while (compteur < exposant) {
    resultat = resultat * base;
    compteur++;
  }
  return resultat;
}

// ============================================
// FONCTIONS — TABLEAUX
// ============================================

// Calcule la moyenne d'un tableau de notes
function calculerMoyenne(tableauteste) {
  let somme = 0;
  for (let i = 0; i < tableauteste.length; i++) {
    somme += tableauteste[i];
  }
  let moyenne = somme / tableauteste.length;
  return moyenne;
}

// Trouve la valeur maximale d'un tableau
function trouverMaximum(tableauteste) {
  let maximum = tableauteste[0];
  for (let i = 1; i < tableauteste.length; i++) {
    if (tableauteste[i] > maximum) {
      maximum = tableauteste[i];
    }
  }
  return maximum;
}

// Trouve la valeur minimale d'un tableau
function trouverMinimum(tableauteste) {
  let minimum = tableauteste[0];
  for (let i = 1; i < tableauteste.length; i++) {
    if (tableauteste[i] < minimum) {
      minimum = tableauteste[i];
    }
  }
  return minimum;
}

// Filtre les Nombres pairs d'un tableau
function filtrerNombrePairs(tableauteste) {
  let nombresPairs = [];

  for (let i = 0; i < tableauteste.length; i++) {
    if (tableauteste[i] % 2 === 0) {
      nombresPairs.push(tableauteste[i]);
    }
  }
  return nombresPairs;
}

// ============================================
// FONCTIONS — OBJETS
// ============================================

// Crée un objet contact à partir des informations fournies
function creerContact(nom, email, telephone) {
  const contact = {
    nom: nom,
    email: email,
    telephone: telephone,
    dateCreation: 2026,
  };
  return contact;
}

// Affiche les propriétés d'un contact formatées dans la console
function afficherContact(contact) {
  console.log("╔══════════════════════════════════╗");
  console.log("║       FICHE DE CONTACT           ║");
  console.log("╠══════════════════════════════════╣");
  for (let cle in contact) {
    console.log(`${cle}:${contact[cle]}`);
  }
  console.log("╚══════════════════════════════════╝");
}

// Fusionne deux objets en un seul (copie les propriétés avec for...in)
function fusionnerObjets(obj1, obj2) {
  const fusion = {};
  for (let cle in obj1) {
    fusion[cle] = obj1[cle];
  }
  for (let cle in obj2) {
    fusion[cle] = obj2[cle];
  }
  return fusion;
}

// ============================================
// FONCTION AIDE
// ============================================

function aide() {
  console.log(`
╔══════════════════════════════════════════╗
║   ${NOM_OUTIL} v${VERSION}
║   ${nombreFonctions} fonctions disponibles
╠══════════════════════════════════════════╣
║
║  📐 CALCUL (Fiche 3)
║   • celsiusVersFahrenheit(celsius)
║   • calculerPourcentage(valeur, total)
║   • calculerIMC(poids, taille)
║
║  🔀 CONDITIONS (Fiche 4)
║   • estPair(nombre)
║   • categoriserAge(age)
║   • forceMdp(motDePasse)
║
║  🔁 BOUCLE FOR (Fiche 5)
║   • tableMultiplication(nombre)
║   • compterVoyelles(mot)
║   • motifEtoiles(lignes)
║
║  🔄 BOUCLE WHILE (Fiche 6)
║   • fizzBuzz(n)
║   • puissance(base, exposant)
║
║  📋 TABLEAUX (Fiche 8)
║   • calculerMoyenne(notes)
║   • trouverMax(tableau)
║   • trouverMin(tableau)
║   • filtrerPairs(tableau)
║
║  🪪 OBJETS (Fiche 9)
║   • creerContact(nom, email, telephone)
║   • afficherContact(contact)
║   • fusionnerObjets(obj1, obj2)
║
╚══════════════════════════════════════════╝
`);
}

// ------------Test Fonctions-------

aide();

console.log("--- Tests fonctions---");

// Convertit des degrés Celsius en Fahrenheit
let temperatureFahrenheit = convertirCelsiusEnFahrenheit(celsius);
console.log("Température en °F = " + temperatureFahrenheit);

// Calcule un pourcentage : (valeur / total) * 100
let pourcentage = calculerPourcentage(valeur, total);
console.log(`${valeur}% de ${total} = ${pourcentage}`);

// Calcule l'IMC (Indice de Masse Corporelle)
let IMC = calculerIMC(poids, taille);
let plageNormal = IMC >= 18.5 && IMC <= 25;
console.log(
  `Votre IMC est de ${IMC} . Etes vous dans la plage normale ? => ${plageNormal} `,
);

// Vérifie si un nombre est pair ou impair
console.log("Le nombre est : " + verifierParite(nombre));

// Catégorise un âge en tranche de vie
console.log(
  "Cette personne est classée dans la catégorie : " + categoriserAge(age),
);

// Évalue la force d'un mot de passe selon sa longueur
console.log("La longueur de votre mot de passe est : " + forceMdp(motDePasse));

// Affiche la table de multiplication d'un nombre
let table = genererTableMultiplication(nombre);
console.log(table);

// Compte les voyelles dans un mot
console.log("Nombre de voyelles dans votre mot : " + compterVoyelles(mot));

// Affiche un motif d'étoiles en triangle
motifEtoiles(lignes);

// Affiche le FizzBuzz de 1 à n
jouerFizzBuzz(n);

// Calcule la puissance d'un nombre sans utiliser **
let resultat = puissance(base, exposant);
console.log(`Le résultat de ${base} puissance ${exposant} est : ${resultat}`);

// Calcule la moyenne d'un tableau de notes
const moyenneNotes = calculerMoyenne(tableauteste);
console.log(`La moyenne de l'élève est : ${moyenneNotes}`);

// Trouve la valeur maximale d'un tableau
let nbreMaximum = trouverMaximum(tableauteste);
console.log(`Le nbre maximum est : ${nbreMaximum}`);

// Trouve la valeur minimale d'un tableau
let nbreMinimum = trouverMinimum(tableauteste);
console.log(`Le nbre minimum est : ${nbreMinimum}`);

// Filtre les nombres pairs d'un tableau
let nombrePairFiltre = filtrerNombrePairs(tableauteste);
console.log(`Les nbres pairs du tableau sont : ${nombrePairFiltre}`);

// Crée un objet contact à partir des informations fournies
let contact = creerContact("John Doe", "John-Doe@mail.fr", "07 00 00 00 00");
console.log(contact);

// Affiche les propriétés d'un contact formatées dans la console
afficherContact(contact);

// Fusionne deux objets en un seul (copie les propriétés avec for...in)
let objetFusionne = fusionnerObjets(obj1, obj2);
console.log(objetFusionne);
