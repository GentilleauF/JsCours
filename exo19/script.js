// Ajouter les éléments HTML suivants dans votre page index.html :
// -Titre h1 avec un texte à l'intérieur,
// -Une div avec du texte à l'intérieur,
// -Dans la div un paragraphe avec du texte à l'intérieur,
// En JS :
// Vous allez changer:
// -la taille de la police du titre h1 en 14 px,
//  -la police de la div et du paragraphe en Arial,
// -la couleur du texte du paragraphe en vert,
// -Ajouter un margin top à la div de 30 px,
// Remplacer :
// -le contenu du titre h1 par -> nouveau titre,
// -le contenu du paragraphe -> nouveau contenu du paragraphe.
// NB : En utilisant querySelector.

titreH1 = document.querySelector('h1');
divSelect = document.querySelector('div');
pSelect = document.querySelector('p');


titreH1.style.fontSize = "14px";
divSelect.style.fontFamily = "Arial";
pSelect.style.color = "green";

titreH1.innerText = "Mon nouveau titre";
pSelect.textContent = "Mon nouveau paragraphe"