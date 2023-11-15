// **Exercice 10 Boucles** :
// Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
// Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
// A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
// -Si il réussit à découvrir le nombre en moins de 10 essais
//             -> afficher : son entrainement acharné a payé,
// -Sinon
//            -> afficher : il est un mauvais mentaliste et il va devoir changer de métier.
// Il souhaite savoir en cas de réussite (**nombre trouvé en moins de 10 essais**)
//            -> afficher : le nombre d'essai qu'il a effectué pour trouver le nombre.

// let nbrAleatoire = 34;
// let statusGame = true;

// for (let i=0; i<10 && statusGame; i++) {
//   let inputNumber = parseInt(prompt("Saisir un nbr"));

//   if (inputNumber > nbrAleatoire) {
//     console.log("Votre nombre est trop grand");

//   } else if (inputNumber < nbrAleatoire) {
//     console.log("votre nbr et trop petit");

//   } else if(i==10) {
//     console.log("GAME OVER");
//     statusGame = false;
//   }
//   else {
//     console.log(`Gagné en ${i+1} coups`);
//     statusGame = false;
//   }
//   console.log("inputnumber = "+inputNumber);

// }
inputNumber = document.getElementById("input-number");
submitBtn = document.getElementById("submit-btn");
textInput = document.getElementById("text-input");

submitBtn = document.addEventListener("click", ((e) => {
  e.preventDefault();
  if (e.target.id != "input-number") {
    let nbrAleatoire = 34;
    let valueInput = inputNumber.value;

    if (valueInput > nbrAleatoire) {
      textInput.innerText = `Le nombre ${valueInput} est trop petit`;
      counter++;
    } else if (valueInput < nbrAleatoire) {
      console.log("votre nbr et trop petit");
      textInput.innerText = `Le nombre ${valueInput} est trop petit`;
      counter++;
    } else {
      counter++;
      textInput.innerText = `Gagné en ${counter} coups`;
      counter = 0;
      return;
    }
    console.log("inputnumber = " + valueInput);

    if (counter == 10) {
      alert("GAME OVER");
      textInput.innerText = "";
      counter = 0;
      return;
    }
  }

}));
let counter = 0;
