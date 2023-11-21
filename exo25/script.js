// EXO 25
// Depuis l'exercice 24 précédent modifier la fonction updateTask :
// -Ajouter une variable (let)  statut qui va contenir un boolean => true
// elle va effectuer le traitement suivant (updateTask):
// -ajouter une condition qui va tester la valeur de la variable statut :
//        -> si statut est égal à true (if)
//                 -1 récupérer la valeur du paragraphe,
//                 -2 créer un input de type texte,
//                 -3 remplacer le paragraphe par l'input précédemment créé, (replaceChild(nouvel élément, enfant)
//                 -4 assigner la valeur (1) à l'input,
//                 -5 passer statut à false,
//       -> si statut est égal à false (else) :
//                 -1 récupérer la valeur de l'input (value),
//                 -2 créer un paragraphe,
//                 -3 remplacer l'input par le paragraphe replaceChild (paragraphe, enfant (input),
//                 -4 assigner au paragraphe la valeur (1),
//                 -5 passer statut à true,



let taskInput = document.getElementById("task");
let tasksResult = document.getElementById("tasks");
let counter = 0;
let statut = true;



function addTask() {
  console.log("ok");
  //creation des elements
  let newDiv = document.createElement('div');
  let newtext = document.createElement('p');
  let newBtnDelete = document.createElement('button')
  let newBtnUpdate = document.createElement('button')
  //texte
  newtext.textContent = taskInput.value;
  newtext.id = `divNumber${counter}`;

  //BTNS
  newBtnDelete.id = 'delete';
  newBtnDelete.setAttribute('onclick', 'deleteTask(this)');
  newBtnDelete.textContent= 'Delete';
  newBtnUpdate.id = 'update';
  newBtnUpdate.setAttribute('onclick', 'updateTask(this)');
  newBtnUpdate.textContent= 'Update';
  
  //Assignement
  tasksResult.appendChild(newDiv)
  newDiv.appendChild(newtext);
  newDiv.appendChild(newBtnDelete);
  newDiv.appendChild(newBtnUpdate);
  counter++;
  console.log(newtext);
}



function dellAllTask() {
  while(tasksResult.firstChild){
    tasksResult.removeChild(tasksResult.firstChild);
  }
}



function reload() {
  location.reload();
}



function deleteTask(e){
  e.parentNode.remove();
};




function updateTask(e){
  if (statut == true) {
    let textInput = e.parentNode.firstChild.textContent;
    let newInput = document.createElement('input');
    e.parentNode.appendChild(newInput);

    e.parentNode.replaceChild( newInput ,e.parentNode.firstChild);
    newInput.value = textInput;
    statut = false;
    
  } else {
    let replacementdiv = document.createElement("p");
    replacementdiv.innerText = e.parentNode.firstChild.value;
    console.log(replacementdiv);
    e.parentNode.replaceChild(replacementdiv, e.parentNode.firstChild);
    statut = true;
  }
}


