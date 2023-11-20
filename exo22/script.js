// Exercice 22 DOM :
// Transformer l'exercice 6 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
// Partie HTML :
// Ajouter  les éléments suivants :
// -un titre h1 -> calculer le prix TTC,
// -un input de (type text, id = prixHt),
// -un input de (type text, id = quantite),
// -un bouton (onclick =calculer()),
// -un paragraphe (id= resultat),
// Partie JS :
// Créer une fonction calculer :
// -récupérer les valeurs des 2 inputs,
// -refaire le calcul comme dans l'exercice 8 (correction),
// -Afficher le résultat dans le paragraphe (id= resultat)
let resultScreen = document.getElementById("resultat");

function calculer() {
  let prixHt = document.getElementById("prixHt").value;
  let quantity = document.getElementById("quantite").value;
  let calcul = (prixHt* 1.2 * quantity).toFixed(2);

  resultScreen.innerText = "Le pris TTC est de " + calcul + "€ "




}