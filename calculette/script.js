let calculBtn = document.querySelectorAll(".calcul-btn");
let screen = document.getElementById("screen")

calculBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        const touche = btn.textContent;
        afficherCalcul(touche)
    })
})

function afficherCalcul (value) {
    document.getElementById("screen").value += value;
}