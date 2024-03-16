// Desafio finalizado utilizando estrutura de decisão IF-ELSE e operadores de comparação

const peso = window.prompt('Digite seu peso: ');
const altura = window.prompt('Digite sua altura:');
const imc = peso / (altura ** 2);

if(imc < 18.5){
    window.alert('Abaixo do peso');
}else if(imc <= 24.9){
    window.alert('Peso normal');
}else if(imc <= 29.9){
    window.alert('Sobrepeso');
}else if(imc <= 34.9){
    window.alert('Obesidade Grau I');
}else if(imc <= 39.9){
    window.alert('Obesidade Grau II');
}else{
    window.alert('Obesidade Grau III');
}
