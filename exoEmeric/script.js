document.addEventListener("click", function(e) {
    console.log(e.target);
    e.target.classList.toggle("selected")
});

