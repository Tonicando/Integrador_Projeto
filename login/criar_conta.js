window.onload = function () {

    const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;
        const erroSenha = document.getElementById("erroSenha");

        erroSenha.textContent = "";

        if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
            return;
        }

        if (senha !== confirmarSenha) {
            erroSenha.textContent = "As senhas não coincidem!";
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const emailExiste = usuarios.find(function (usuario) {
            return usuario.email === email;
        });

        if (emailExiste) {
            erroSenha.textContent = "Este email já está cadastrado!";
            return;
        }

        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

        window.location.href = "../index/index.html";

    });

};