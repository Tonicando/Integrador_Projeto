document.addEventListener("DOMContentLoaded", function () {

    const info = document.getElementById("pagamentoInfo");

    const pagamento = localStorage.getItem("pagamento");
    const codigo = localStorage.getItem("codigoPedido");
    const nome = localStorage.getItem("nome");
    const telefone = localStorage.getItem("telefone");

    if (!info) {
        console.log("Div pagamentoInfo não encontrada");
        return;
    }

    if (pagamento === "pix") {

        info.innerHTML = `
            <h2>Pagamento via PIX</h2>

            <p><strong>Pedido:</strong> ${codigo}</p>

            <p><strong>Cliente:</strong> ${nome}</p>

            <p><strong>Telefone:</strong> ${telefone}</p>

            <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=SaborDaTerraPix"
            alt="QR Code PIX">

            <p><strong>Chave PIX:</strong> (34) 99176-7274</p>
        `;
    }

    else if (pagamento === "credito") {

        info.innerHTML = `
            <h2>Pagamento via Cartão de Crédito</h2>

            <p><strong>Pedido:</strong> ${codigo}</p>

            <p><strong>Cliente:</strong> ${nome}</p>

            <p><strong>Telefone:</strong> ${telefone}</p>

            <p>O pagamento será realizado na entrega.</p>
        `;
    }

    else if (pagamento === "debito") {

        info.innerHTML = `
            <h2>Pagamento via Cartão de Débito</h2>

            <p><strong>Pedido:</strong> ${codigo}</p>

            <p><strong>Cliente:</strong> ${nome}</p>

            <p><strong>Telefone:</strong> ${telefone}</p>

            <p>O pagamento será realizado na entrega.</p>
        `;
    }

    else {

        info.innerHTML = `
            <h2>Erro</h2>

            <p>Nenhuma forma de pagamento encontrada.</p>
        `;
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