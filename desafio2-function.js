// Desafio finalizado utilizando estrutura de decisão IF-ELSE e operadores de comparação
function calculaIMC(){
    
    const peso = window.prompt('Digite seu peso: ');
    const altura = window.prompt('Digite sua altura:');
    const imc = peso / (altura ** 2);
    
    if(imc < 18.5){
        window.alert(`IMC: ${imc.toFixed(2)} | Abaixo do peso`);
    }else if(imc <= 24.9){
        window.alert(`IMC: ${imc.toFixed(2)} | Peso normal`);
    }else if(imc <= 29.9){
        window.alert(`IMC: ${imc.toFixed(2)} | Sobrepeso`);
    }else if(imc <= 34.9){
        window.alert(`IMC: ${imc.toFixed(2)} | Obesidade Grau I`);
    }else if(imc <= 39.9){
        window.alert(`IMC: ${imc.toFixed(2)} | Obesidade Grau II`);
    }else{
        window.alert(`IMC: ${imc.toFixed(2)} | Obesidade Grau III`);
    }
}
