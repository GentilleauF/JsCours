// Depuis l'exemple ci-dessus et la correction de l'exercice 9 (prix des pains au chocolats) :
// -Dans la page HTML ajouter les éléments suivants :
//       --un titre h1 (calculer le prix à payer),
//       --un input de type text ( id = quantite),
//       --un bouton (onclick = calculer()),
//       --un paragraphe (id= resultat),
// -Dans la partie JS :
// créer une fonction qui va se nommer calculer et qui va effectuer le calcul du prix à payer des pains au chocolats :
// récupérer la valeur de l'input (id quantité) avec value,
// afficher dans le paragraphe (id = résultat) le montant à payer.
// Bonus : Tester si le champ quantité est vide 
//       => afficher dans le paragraphe "Veuillez choisir un nombre de chocolatine" 

let textInput = document.getElementById("resultat");


function calculer() {
  let nbrPainsAuChocolat = document.getElementById("quantité").value;
  let price = 0;

  if(nbrPainsAuChocolat == "") {
    textInput.innerText = 'Veuillez entrer un nbr de pains au chocolat'
  } else {
    if (nbrPainsAuChocolat <= 10) {
  price = nbrPainsAuChocolat * 1.4;
} else if (nbrPainsAuChocolat > 10 && nbrPainsAuChocolat <= 20) {
  price = 14;

  for (let i = 10; i < nbrPainsAuChocolat; i++) {
    price = price + 1.3;
  }
} else if(nbrPainsAuChocolat >20 && nbrPainsAuChocolat<100){
    price = 27;

    for (let i = 20; i < nbrPainsAuChocolat; i++) {
        price = price + 1.2;
}}

textInput.innerText = `Le prix est de ${price}€`
console.log(price);
  }
}