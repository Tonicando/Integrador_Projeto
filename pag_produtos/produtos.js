
document.addEventListener("DOMContentLoaded", function() { 
    const botao = document.querySelectorAll(".categoria");
    const produtos = document.querySelectorAll(".produto");

    botao.forEach(botao => {
        botao.addEventListener('click', () => {
            const ativado = document.querySelector('.categoria.ativo');
            if(ativado){
                ativado.classList.remove('ativo');
            }
            botao.classList.add('ativo');

            const peneira =  botao.getAttribute('data-filtro');
            produtos.forEach(produto =>{
                const categoria = produto.getAttribute('data-categoria');
                if (peneira =='Todos' || peneira == categoria) {
                    produto.classList.remove('transparente');}
                else{
                    produto.classList.add('transparente');
                }
            });
        });
    });
});


