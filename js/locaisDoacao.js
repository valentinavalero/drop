function goToHospital(nome, cidade, imagem) {
    const url =
        `local.html?nome=${encodeURIComponent(nome)}&cidade=${encodeURIComponent(cidade)}&imagem=${encodeURIComponent(imagem)}`;

    window.location.href = url;
}


// PESQUISA
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    let visibleCards = 0;

    cards.forEach(card => {

        const hospital =
            card.querySelector("h3").textContent.toLowerCase();

        const cidade =
            card.querySelector("p").textContent.toLowerCase();

        if (
            hospital.includes(value) ||
            cidade.includes(value)
        ) {
            card.style.display = "block";
            visibleCards++;
        } else {
            card.style.display = "none";
        }

    });

    // MOSTRAR MENSAGEM
    if (visibleCards === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});