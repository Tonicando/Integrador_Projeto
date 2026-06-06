window.onload = function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const senha = document.getElementById("senha").value;
        const erroLogin = document.getElementById("erroLogin");

        erroLogin.textContent = "";

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuario = usuarios.find(function (usuario) {
            return usuario.email === email && usuario.senha === senha;
        });

        if (!usuario) {
            erroLogin.textContent = "Email ou senha incorretos!";
            return;
        }

        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

        window.location.href = "../index/index.html";

    });

};