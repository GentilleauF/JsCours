let myUsers = []

function ajouter() {

    for (let i=0; i<3; i++){
        let monNom = prompt(`Saisir le nom de l'utilisateur ${i+1}`);
        let monPrenom = prompt(`Saisir le prenom de l'utilisateur ${i+1}`);
        let monAge = parseInt(prompt(`Saisir l'age de l'utilisateur ${i+1}`));

        let utilisateur = {
            nom: monNom,
            prenom: monPrenom,
            age: monAge
        }
        myUsers.push(utilisateur)
    }
console.log(myUsers);


//calcul du olus oetit
let plusPetit = myUsers[0];

for (let i=1; i<myUsers.length; i++){
    if (myUsers[i].age < plusPetit.age){
        plusPetit = myUsers[i];
    }
}
console.log("l'user le plus jeune est:" + plusPetit['nom']);
}







