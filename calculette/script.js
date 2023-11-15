let calculetteScreen = document.querySelector('.calculette-screen');
let calculetteButtons = document.querySelectorAll('.button-btn');
let calculProcess = "";

calculetteButtons.forEach(function(button){
    button.addEventListener("click", function(e){
        let buttonValue =e.target.innerHTML;

        if (buttonValue == "C"){
            calculetteScreen.innerHTML = "";
            calculProcess = "";
        } else if (buttonValue == "=") {
            if (eval(calculProcess) == Infinity) {
                calculetteScreen.innerHTML = 'Error'
            } else {
                calculetteScreen.innerHTML = eval(calculProcess);
            }
        } else {
            calculProcess += buttonValue;
            calculetteScreen.innerHTML = calculProcess;
        }
    })
})