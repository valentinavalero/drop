function login() {
    let email = document.getElementById("emailLogin").value.toLowerCase().trim();
    let senha = document.getElementById("senhaLogin").value;

    let usuario = JSON.parse(localStorage.getItem("usuarioDROP"));

    if (usuario && email === usuario.email && senha === usuario.senha) {
        alert("Login realizado com sucesso!");
        window.location.href = "inicio.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}

function toggleSenha(idCampo, icone) {
    let campo = document.getElementById(idCampo);

    if (campo.type === "password") {
        campo.type = "text";
        icone.classList.remove("fa-eye");
        icone.classList.add("fa-eye-slash");
    } else {
        campo.type = "password";
        icone.classList.remove("fa-eye-slash");
        icone.classList.add("fa-eye");
    }
}