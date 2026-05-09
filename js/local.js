/* PEGAR DADOS DA URL */
const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const cidade = params.get("cidade");
const imagem = params.get("imagem");

/* ELEMENTOS */
const titulo = document.getElementById("nomeHospital");
const cidadeTexto = document.getElementById("cidadeHospital");
const mapa = document.getElementById("mapa");
const img = document.getElementById("imagemHospital");

/* ALTERAR DADOS */
if (nome) {
    titulo.innerText = nome;
}

if (cidade) {
    cidadeTexto.innerText = cidade;
}

if (imagem) {
    img.src = imagem;
}

if (nome || cidade) {
    const query = encodeURIComponent(nome + " " + cidade);
    mapa.src = `https://www.google.com/maps?q=${query}&output=embed`;
}