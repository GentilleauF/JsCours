

let taskInput = document.getElementById("task");
let tasksResult = document.getElementById("tasks");
let counter = 0;
let statut = true;


localStorage.getItem('tasks') == null ? localStorage.setItem("tasks", []):false;



function addTask() {

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




  let valeur = document.querySelector('#task').value;
  //récupérer dans une variable la valeur clé ('tasks')
  let tasks = localStorage.getItem('tasks');
  //test si la clé tasks dans localstorage est vide
  if(tasks==""){
    tasks+= valeur;
  }
  //test sinon elle n'est pas vide
  else{
      //transforme en tableau
      tasks = tasks.split(",");
      //ajoute la valeur de l'input au tableau
      tasks.push(valeur);
  }
  //mise à jour de la clé
  localStorage.setItem('tasks',tasks);


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
}



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
    e.parentNode.replaceChild(replacementdiv, e.parentNode.firstChild);
    statut = true;
  }
}

function showAllTask(){
  let arrayTask = localStorage.getItem("tasks").split(",");

  for (let i=0; i<arrayTask.length;i++){
    console.log(arrayTask[i]);
    let newDiv = document.createElement('div');
    let newtext = document.createElement('p');
    let newBtnDelete = document.createElement('button')
    let newBtnUpdate = document.createElement('button')
    //texte
    newtext.textContent = arrayTask[i];
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
}


