let myName = document.getElementById("name");
let myFirstname = document.getElementById("firstname");
let myEmail = document.getElementById("email");

// Fonction pour ne pas raffraichir la page au submit 
document.getElementById("form").onsubmit = (event) => {
    event.preventDefault();
}

let myArray = []
document.getElementById("bt").addEventListener("click", submit)


function submit() {
    myArray.push({
        nom: myName.value,
        prenom: myFirstname.value,
        email: myEmail.value
    });

    console.log(myArray); 
}


