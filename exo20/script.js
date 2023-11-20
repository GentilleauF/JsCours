// Créer une page HTML qui va contenir les éléments suivants :
// -Un titre h1 -> "Liste des utilisateurs",
// -Une div,
// -Dans la div ajouter :
//         --1 balise img,
//         --3 paragraphes sans id,
// Depuis l'objet JS ci-dessous (remplacer les valeurs par vos propres informations):
//  const user = {
//   'id' : 1,
//   'nom': 'votre nom',
//   'prenom': 'votre prénom',
//   'age': votre age,
//   'image' :'./logo.jpg'
// }

// -Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
// -Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
// -Remplacer l'image par l'url contenu dans user.image
// Mettre en forme en JS les éléments suivants :
// -paragraphe nom, prenom, age : police taille 11 px, couleur blue,
// -taille de l'image : 100 px de large et 100 px de long,
// -Aligner l'image à en haut à droite et ajouter un margin de 10 px.
// -remplacer la couleur de fond de la div : rgb(220, 220, 220).
// NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent


const user = {
    'id' : 1,
    'nom': 'Gentilleau',
    'prenom': 'Francois',
    'age': 28,
    'image' :'./logo.jpg'
  }


  let userDiv = document.querySelector("#userId");
  let imgSelect = userDiv.children[0]
  
  imgSelect.src = user.image;
  
  userDiv.children[1].innerText = user.nom;
  userDiv.children[2].innerText = user.prenom;
  userDiv.children[3].innerText = user.age;

  console.log(userDiv.childElementCount);
  for (let i=1; i<userDiv.childElementCount; i++) {
    userDiv.children[i].style.fontSize = "11px";
    userDiv.children[i].style.color = "blue";
  }

  imgSelect.style.width = "100px";
  imgSelect.style.height = "100px";
  imgSelect.style.position = "absolute";
  imgSelect.style.right = "10px";

  userDiv.style.background = "rgb(220, 220, 220)"
  
