function cadastrar() {
    let usuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value.toLowerCase().trim(),
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        senha: document.getElementById("senha").value
    };

    if (usuario.nome === "" || usuario.email === "" || usuario.senha === "") {
        alert("Preencha os campos obrigatórios.");
        return;
    }

    localStorage.setItem("usuarioDROP", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
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