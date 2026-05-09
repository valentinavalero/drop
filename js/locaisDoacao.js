function goToHospital(nome, cidade, imagem) {
    const url =
        `local.html?nome=${encodeURIComponent(nome)}&cidade=${encodeURIComponent(cidade)}&imagem=${encodeURIComponent(imagem)}`;

    window.location.href = url;
}
