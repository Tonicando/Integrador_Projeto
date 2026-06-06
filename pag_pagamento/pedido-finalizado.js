let forma =
    localStorage.getItem("pagamento");

let info =
    document.getElementById("infoPagamento");

if (forma === "pix") {

    info.innerHTML =
        "<h3>Pagamento via PIX</h3><p>Código PIX: PIX123456789</p>";

}

else if (forma === "credito") {

    info.innerHTML =
        "<h3>Cartão de Crédito</h3><p>Código: CRD123456</p>";

}

else if (forma === "debito") {

    info.innerHTML =
        "<h3>Cartão de Débito</h3><p>Código: DEB123456</p>";

}

else if (forma === "dinheiro") {

    info.innerHTML =
        "<h3>Pagamento em Dinheiro</h3><p>Pagamento na entrega.</p>";

}