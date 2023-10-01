const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        offselecionado();
        onselecionado();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });

});

function offselecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove("selecionado");
};

function onselecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove("selecionado");
};

