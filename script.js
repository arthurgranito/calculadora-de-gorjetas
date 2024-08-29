const conta = document.getElementById('conta');
const pessoas = document.getElementById('pessoas');
const gorjetaPrecoResultado = document.getElementById('gorjetaPrecoResultado');
const totalPessoaResultado = document.getElementById('totalPessoaResultado');
const botaoLimpar = document.getElementById('botaoLimpar');
const gorjetaPorcentagem = document.getElementById('outra');
const resultado = document.getElementById('resultado')
let porcentagem;
const pErro = document.getElementById('erro');
const botaoCalcular = document.getElementById('calcular');

botaoCalcular.addEventListener('click', () => {
    if(pessoas.value == '0'){
        pErro.style.display = 'block';
    } else{
        pErro.style.display = 'none';
        if(conta.value == '' || pessoas.value == '' || gorjetaPorcentagem.value == 0){
            alert('Preencha os campos');
            conta.value = '';
            pessoas.value = '';
            gorjetaPorcentagem.value = '';
        } else{
            porcentagem = gorjetaPorcentagem.value / 100;
            resultado.style.display = 'block';
    
            gorjetaPrecoResultado.innerText = `R$ ${((conta.value * porcentagem) / pessoas.value).toFixed(2)}`;
    
            totalPessoaResultado.innerText = `R$ ${((parseFloat(conta.value) + (parseFloat(conta.value) * porcentagem)) / pessoas.value).toFixed(2)}`;
        }
    }
})

botaoLimpar.addEventListener('click', () => {
    porcentagem = '';
    totalPessoaResultado.innerHTML = '';
    gorjetaPrecoResultado.innerHTML = '';
    resultado.style.display = 'none';
    conta.value = '';
    pessoas.value = '';
    gorjetaPorcentagem.value = '';
});


