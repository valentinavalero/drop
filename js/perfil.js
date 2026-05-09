const usuario = JSON.parse(localStorage.getItem("usuarioDROP"));

if (usuario) {

    document.getElementById("perfilNome").textContent = usuario.nome || "-";
    document.getElementById("perfilEmail").textContent = usuario.email || "-";
    document.getElementById("perfilCpf").textContent = usuario.cpf || "-";
    document.getElementById("perfilTelefone").textContent = usuario.telefone || "-";

} else {

    alert("Nenhum usuário encontrado. Faça login.");
    window.location.href = "login.html";
}

function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}