document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("nome").value =
        localStorage.getItem("nome") || "";

    document.getElementById("telefone").value =
        localStorage.getItem("telefone") || "";

    document.getElementById("rua").value =
        localStorage.getItem("rua") || "";

    document.getElementById("numero").value =
        localStorage.getItem("numero") || "";

    document.getElementById("bairro").value =
        localStorage.getItem("bairro") || "";

    document.getElementById("cidade").value =
        localStorage.getItem("cidade") || "";

    document.getElementById("cep").value =
        localStorage.getItem("cep") || "";

    document.getElementById("observacao").value =
        localStorage.getItem("observacao") || "";

    document.getElementById("pagamento").value =
        localStorage.getItem("pagamento") || "";

    const campos = document.querySelectorAll(
        "input, textarea, select"
    );

    campos.forEach(function (campo) {

        campo.addEventListener("input", function () {

            localStorage.setItem(
                campo.id,
                campo.value
            );

        });

    });

    const form = document.getElementById("formPedido");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        localStorage.setItem(
            "nome",
            document.getElementById("nome").value
        );

        localStorage.setItem(
            "telefone",
            document.getElementById("telefone").value
        );

        localStorage.setItem(
            "rua",
            document.getElementById("rua").value
        );

        localStorage.setItem(
            "numero",
            document.getElementById("numero").value
        );

        localStorage.setItem(
            "bairro",
            document.getElementById("bairro").value
        );

        localStorage.setItem(
            "cidade",
            document.getElementById("cidade").value
        );

        localStorage.setItem(
            "cep",
            document.getElementById("cep").value
        );

        localStorage.setItem(
            "observacao",
            document.getElementById("observacao").value
        );

        localStorage.setItem(
            "pagamento",
            document.getElementById("pagamento").value
        );

        const codigoPedido =
            "PED-" + Math.floor(Math.random() * 1000000);

        localStorage.setItem(
            "codigoPedido",
            codigoPedido
        );

        window.location.href =
            "pedido-finalizado.html";

    });

});


document.addEventListener("DOMContentLoaded", function () {

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    const textoUsuario = document.getElementById("textoUsuario");
    const btnSair = document.getElementById("btnSair");

    if (!textoUsuario || !btnSair) return;

    if (usuarioLogado) {

  textoUsuario.textContent = "Seja bem-vindo, " + usuarioLogado.nome;

        btnSair.style.display = "block";

        btnSair.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            localStorage.removeItem("usuarioLogado");

            window.location.reload();

        });

    }

});

document.addEventListener("DOMContentLoaded", function () {

    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    const textoUsuario = document.getElementById("textoUsuario");
    const btnSair = document.getElementById("btnSair");

    if (!textoUsuario || !btnSair) return;

    if (usuarioLogado) {

  textoUsuario.textContent = "Seja bem-vindo, " + usuarioLogado.nome;

        btnSair.style.display = "block";

        btnSair.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            localStorage.removeItem("usuarioLogado");

            window.location.reload();

        });

    }

});