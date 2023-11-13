let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}
// calculer la moyenne de notes et l'afficher dans la console 
let sommesNotes = 0

for (let y=0; y<notes.length; y++) {
    sommesNotes += notes[y];
}

let moyenne =  sommesNotes/notes.length;

console.log(moyenne);