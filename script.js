let noteInput = document.getElementById("notes-input");
afficherNotes = document.getElementById("affichage-notes");
afficherMoyenne = document.getElementById("ma-moyenne");
let notes = [] ;

//Actions
document.getElementById("bt").addEventListener("click", ajouterNote);
document.getElementById("bt-calcul").addEventListener("click", calculMoyenne);
document.getElementById("bt-supprimer").addEventListener('click', supprimerNotes)



// ===== AJOUTER UNE NOTE ===== //
function ajouterNote(e) {
    e.preventDefault();
    sommesNotes = 0;

    notes.push(parseFloat(noteInput.value))  
    console.log(notes); 
    
    for (let i=0; i<notes.length; i++) {
        afficherNotes.textContent = "Mes notes : " + notes
    }
}

// ===== SUPPRIMER UNE NOTE ===== //
function supprimerNotes() {
    notes = [];
    afficherNotes.textContent = notes
    afficherMoyenne.textContent = "Entrer vos notes pour calculer votre moyenne"
}

// ===== CALCULER LA MOYENNE ===== //
function calculMoyenne () {
    for (let y=0; y<notes.length; y++) {
        sommesNotes += notes[y];
    }

    let moyenne =  sommesNotes/notes.length;
    if (moyenne % 1 != 0) {
       afficherMoyenne.textContent ="Ma moyenne est de: " + moyenne.toFixed(2) 
    } else {
        afficherMoyenne.textContent ="Ma moyenne est de: " + moyenne
    }
   ;
}






