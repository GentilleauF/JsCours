let calculBtn = document.querySelectorAll(".calcul-btn");

calculBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const touche = btn.textContent;
        afficherCalcul(touche)
    })
})

function afficherCalcul (value) {
    document.getElementById("screen").value += value;

}