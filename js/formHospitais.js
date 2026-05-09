// JUSTIFICATIVA
const radios = document.getElementsByName("tipo");
const box = document.getElementById("justificativaBox");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.checked && radio.value === "Urgente") {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});

// SUBMIT
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("popupSucesso").classList.add("show");

    setTimeout(() => {
        window.location.href = "inicio.html";
    }, 2500);

});
