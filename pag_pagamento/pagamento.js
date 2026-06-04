document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrinho();
});

function renderizarCarrinho() {
    const listaCarrinho = document.getElementById("listaprodutos");
    const totalElemento = document.getElementById("total");
    
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    
    if (!listaCarrinho) return;
    
    listaCarrinho.innerHTML = "";
    let valorTotal = 0;

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p class='carrinho-vazio'>Seu carrinho está vazio.</p>";
        if (totalElemento) totalElemento.innerText = "R$ 0,00";
        return;
    }

    carrinho.forEach((produto, index) => {
        const subtotal = produto.preco * produto.quantidade;
        valorTotal += subtotal;

        listaCarrinho.innerHTML += `
            <div class="item">
                <img src="${produto.img}" alt="${produto.nome}">
                <div class="infodoproduto">
                    <h3>${produto.nome}</h3>
                    <span>R$ ${produto.preco.toFixed(2)}</span>
                </div>
                <div class="controle-quantidade">
                    <button class="btn-qtd" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <span class="item_qtd">${produto.quantidade}</span>
                    <button class="btn-qtd" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
                <div class="item-total">
                    R$ ${subtotal.toFixed(2)}
                </div>
                <button class="btn-remover" onclick="removerProduto(${index})">×</button>
            </div>
        `;
    });

    if (totalElemento) {
        totalElemento.innerText = `R$ ${valorTotal.toFixed(2)}`;
    }
}

function alterarQuantidade(index, mudanca) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    
    carrinho[index].quantidade += mudanca;

    if (carrinho[index].quantidade <= 0) {
        carrinho.splice(index, 1);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderizarCarrinho();
}

function removerProduto(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    renderizarCarrinho();
}
const deletar = document.querySelectorAll('.deletar');

deletar.forEach(del => {

    del.addEventListener('click', () => {

        const delnome = del.dataset.nome;

        carrinho = carrinho.filter(
            produto => produto.nome !== delnome
        );

        localStorage.setItem(
            'carrinho',
            JSON.stringify(carrinho)
        );

        location.reload();

    });

});

const deletatudo = document.getElementById('limpar_tudo');

if(deletatudo){
    deletatudo.addEventListener('click', () =>{
        carrinho = [];
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        location.reload()
    })
}