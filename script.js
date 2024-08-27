let conta = 0;
let pessoas = 0;
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