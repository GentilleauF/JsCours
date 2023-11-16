// Gérer des compte en banque :
// Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
// Faire une scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
// Puis Alex retire 100
// Puis Marco fait un virement de 300 à Clovis
// Enfin Alex tente un retrait de 600
// Afficher tous les soldes finaux.
// Ces compte sont placés dans un tableau associatif de clients 
// Bonus :
// Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépassent le solde du compte bancaire),
// Tester avec une tentatives de retret de Alex de 1200 €



class CompteBancaire {
  nom;
  solde;
  constructor(nom, solde){
    this.nom = nom;
    this.solde = solde;
  }

  credit(montant){
    this.solde += montant;
  }

  retrait(montant){
    if(montant> this.solde){
      console.log("Virement impossible, fons insuffisants");
    } else {
    this.solde -= montant;
    console.log("retrait de " + montant + " réalisé, nouveau solde: " + this.solde);
    }
  }

  display(){
    console.log(`Votre solde est de ${this.solde}`);
  }

  virement(montant, beneficiaire){
    if(montant> this.solde){
      console.log("Virement impossible, fonds insuffisants");
    } else {
      this.solde -= montant;
      beneficiaire.solde += montant;
      console.log("Votre virement de "+ montant + '€ a été viré à ' + beneficiaire.nom);
    }
  }

}



let usersAccount = {
  Alex :  new CompteBancaire("Alex", 1000),
  Clovis : new CompteBancaire("Clovis", 1000),
  Marco : new CompteBancaire("Marco", 1000)
};

let selectUsers = document.querySelectorAll("#userId");
selectUsers.addEventListener("click", function() {
  
})

usersAccount["Marco"].virement(200, usersAccount["Alex"]);
usersAccount["Marco"].retrait(200);


//Ajout des users
window.addEventListener("load", function() {
  const container = document.getElementById("user-container"); // Assume que tu as une div avec l'id "userContainer"

  for (const userId in usersAccount) {
      if (usersAccount.hasOwnProperty(userId)) {
          const userName = usersAccount[userId].nom;

          const userDiv = document.createElement("div");
          userDiv.textContent = userName;
          userDiv.setAttribute("id", "userId")
          container.appendChild(userDiv);
      }
  }
});


//Selection d'une personne



