// passo1- pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo2- identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo3- desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // passo4- marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo5- esconder a imagem ativa anterior
        escoderImagemAtiva();

        // passo6- aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})

function escoderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

