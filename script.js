let conta = 0;
let pessoas = 0;
let porcentagem = 0;
const contaInput = document.getElementById('conta');

contaInput.addEventListener('input', receberValorConta);

function receberValorConta() {
    conta = parseFloat(contaInput.value);
}

const pessoasInput = document.getElementById('pessoas');

pessoasInput.addEventListener('input', receberQuantidadePessoas);

function receberQuantidadePessoas(evento) {
    const divErro = document.querySelector('.pessoas .input-box');
    const paragrafoErro = document.querySelector('.pessoas #erro');

    if (pessoasInput.value === '0') {
        paragrafoErro.style.display = 'block';
        divErro.setAttribute("id", "erroDiv");
    } else {
        paragrafoErro.style.display = 'none';
        divErro.setAttribute("id", "");
        pessoas = parseInt(pessoasInput.value);
        console.log(pessoas);
    }
}

const botoesGorjetas = document.querySelectorAll('.gorjeta input[type="button"');

botoesGorjetas.forEach(botao => {
    botao.addEventListener('click', receberPorcentagemBotao)
})

function receberPorcentagemBotao(evento) {
    botoesGorjetas.forEach(botao => {
        botao.classList.remove('botao-ativo')

        if(botao.value === evento.target.value){
            botao.classList.add('botao-ativo');
        }
    })
    porcentagem = parseFloat(evento.target.value) / 100;
}