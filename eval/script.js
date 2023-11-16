const tabData = [];
const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];

//2 ajout a tabData
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

console.log(tabData);

//3. Creer la fonction afficherAnimal()
function afficherHumain(obj){
    console.log("nom: "+ obj.name);
    console.log("email: " + obj.email);
    console.log("age: " + obj.age);

}
//test
afficherHumain(usersHuman[0]);

//4. Creer la fct creeranimal()
console.log("EXERCICE 4");
function afficherAnimal(obj){
    console.log("nom: "+ obj.name);
    console.log("espece: " + obj.espece);
    console.log("age: " + obj.age);
    console.log("proprietaire: " + obj.propriétaire);
}
//test
afficherAnimal(usersPet[0]);


//5. Creer la fct afficerXeno()
console.log("EXERCICE 5");
function afficerXeno(obj){
    console.log("nom: "+ obj.name);
    console.log("espece: " + obj.espece);
    console.log("age: " + obj.age);
    console.log("niveau de menace: " + obj.menace);
}
//test
afficerXeno(usersXeno[0]);


//6 Creer la fonction profil
console.log("");
console.log("EXERCICE 6, 7 et 8");

function profil(arr) {
    for (let i=0; i<arr.length; i++){
        if(arr[i].type == "humain"){
            afficherHumain(arr[i])
        } else if(arr[i].type == "animal de compagnie"){
            afficherAnimal(arr[i])
        } else if(arr[i].type == "Xeno"){
            afficerXeno(arr[i])
        } else{
            console.log("Type de profil non existant");
        }
       
        
    }
}

profil(usersPet);
profil(usersHuman);
profil(usersXeno);

//QUestion 10 et 11
console.log("");
console.log("EXERCICE 10 et 11");

function profilALL(arr) {
    for (let i=0; i<arr.length; i++){
        profil(arr[i]);
    }

}

profilALL(tabData)








