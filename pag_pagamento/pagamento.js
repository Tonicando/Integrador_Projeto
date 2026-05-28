console.log("Script de pagamento carregado");

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const ListaCarrinho = document.getElementById('listaprodutos');
const total = document.getElementById('total');

let valor = 0;

if(ListaCarrinho){

    ListaCarrinho.innerHTML = '';

    carrinho.forEach(produto => {

        let conta = Number(produto.quantidade * produto.preco);

        valor += conta;

        ListaCarrinho.innerHTML += `
        
        <div class="item">

            <img src="${produto.img}" alt="${produto.nome}">
            <div class="item_qtd">
                ${produto.quantidade}
            </div>

            <div class="infodoproduto">
                <h3>${produto.nome}</h3>

                <span>
                    R$ ${conta.toFixed(2)}
                </span>
            </div>


            <button class="deletar"
            data-nome="${produto.nome}">
                X
            </button>

        </div>
        `;
    });

    total.textContent = `Total: R$ ${valor.toFixed(2)}`;

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


}

const redirecionamento = document.getElementById("finalizarCompra");

    if(redirecionamento){
        redirecionamento.addEventListener('click',() =>{
         window.location.href =
            "../pedido-finalizado/pedido-finalizado.html";
        })
    }

