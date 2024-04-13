// Desafio finalizado utilizando estrutura de decisão IF-ELSE e operadores de comparação
function calculaIMC(peso, altura){

    const imc = peso / (altura ** 2);
    let mensagem;
    
    if(imc < 18.5){
        mensagem = `IMC: ${imc.toFixed(2)} | Abaixo do peso`;
    }else if(imc <= 24.9){
        mensagem = `IMC: ${imc.toFixed(2)} | Peso normal`;
    }else if(imc <= 29.9){
        mensagem = `IMC: ${imc.toFixed(2)} | Sobrepeso`;
    }else if(imc <= 34.9){
        mensagem = `IMC: ${imc.toFixed(2)} | Obesidade Grau I`;
    }else if(imc <= 39.9){
        mensagem = `IMC: ${imc.toFixed(2)} | Obesidade Grau II`;
    }else{
        mensagem = `IMC: ${imc.toFixed(2)} | Obesidade Grau III`;
    }
    return(mensagem);
}