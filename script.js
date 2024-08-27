let conta = 0;
let pessoas = 0;
let porcentagem = 0;
const contaInput = document.getElementById('conta');

contaInput.addEventListener('input', receberValorConta);

function receberValorConta() {
    conta = parseFloat(contaInput.value);
    calcular()
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
    }

    calcular();
}

const botoesGorjetas = document.querySelectorAll('.gorjeta input[type="button"');

botoesGorjetas.forEach(botao => {
    botao.addEventListener('click', receberPorcentagem)
})

function receberPorcentagem(evento) {
    botoesGorjetas.forEach(botao => {
        botao.classList.remove('botao-ativo')

        if (botao.value === evento.target.value) {
            botao.classList.add('botao-ativo');
        }
    })

    if (evento.target.value !== '') {
        porcentagem = parseFloat(evento.target.value) / 100;
    } else{
        porcentagem = 0;
    }

    calcular();
}

const gorjetaInput = document.getElementById('outra');

gorjetaInput.addEventListener('input', receberPorcentagem);

function calcular() {
    if (conta !== 0 && porcentagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector('.gorjeta-total > strong');

        strongGorjetaTotal.innerHTML = `R$ ${(conta * porcentagem / pessoas).toFixed(2)}`;

        const strongTotal = document.querySelector('.total > strong');

        strongTotal.innerHTML = `R$ ${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`;
    }
}

const botaoLimpar = document.querySelector('.resultados button');

botaoLimpar.addEventListener('click', limpar);

function limpar() {
    contaInput.value = '';
    botoesGorjetas.forEach(botao => {
        botao.classList.remove('botao-ativo');
    })
    gorjetaInput.value = '';
    pessoasInput.value = '';

    document.querySelector('.gorjeta-total > strong').innerHTML = 'R$ 0.00';

    document.querySelector('.total > strong').innerHTML = 'R$ 0.00';
}