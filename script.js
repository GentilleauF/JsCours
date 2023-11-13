let myArray = []
document.getElementById("bt").addEventListener("click", submit)


function submit() {
    let myName = document.getElementById("name").value;
    let myFirstname = document.getElementById("firstname").value;
    let myEmail = document.getElementById("email").value;

    myArray.push(myName);
    myArray.push(myFirstname);
    myArray.push(myEmail); 
console.log(myArray); 
}


