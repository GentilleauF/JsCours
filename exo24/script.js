// **Exercice 24 DOM** :
// En vous inspirant de l'exemple ci-dessus :
// **Partie HTML** :
// -un titre h1 = liste des tâches,
// -un input de type text (id= task),
// -un bouton (id = add, onclick = addTask()) texte Ajouter,
// -un bouton (id = delAllTask, onclick = delAllTask()) texte Tout Supprimer,
// -un bouton (id = reload, onclick = reload()) texte Recharger la page,
// -une div (id = tasks)
// **Partie JS** :
// -Créer une fonction **addtask **qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),:
// -Récupérer la div (tasks)
// Récupérer la valeur de l'input (id task),
// -Créer un paragraphe,
// Ajouter la valeur de l'input (id task)  au paragraphe,
// Ajouter le paragraphe à la div (id = tasks)
// -Créer une fonction **delAllTask **qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),
// -Créer une fonction **reload **qui va à chaque clic sur le bouton recharger la page.

// **Bonus** :
// -Dans la fonction **addTask** (*remplacer le code précédent*) :
// A chaque clic sur la fonction : 
//       -ajouter une div (class = container),
//           -> à l'intérieur de la div pour aller ajouter un paragraphe,
//           -> récupérer le contenu de l'input texte (**task**) et passer la valeur au paragraphe,
//           -> ajouter un bouton (id = delete, onclick = deleteTask(this),
//           -> ajouter un bouton (id = update, onclick = updateTask(this),
//           ->Ajouter une fonction **deleteTask **qui va :
//              Supprimer la tache sélectionnée,
//           -Ajouter une fonction **updateTask **qui va :
//             Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)
// **NB** : on à besoin d'utiliser la création d'élément (createElement() et appendChild())








let taskInput = document.getElementById("task");
let tasksResult = document.getElementById("tasks");
let counter = 0;
let status = true;




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
  newBtnUpdate.textContent= 'Update'
  
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
  e.parentNode.firstChild.textContent= taskInput.value
}


//nextSiblling : aller au suivant
//previousSiblling

