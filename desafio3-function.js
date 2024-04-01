function converteTemperatura(temperatura, escalaAtual, escalaFutura){

    let tempConvertida, msgErro = 'Ok';
    
        
        // Conversão de Celsius para Farenheit e para Kelvin
    if (!isNaN(temperatura)){
        
        escalaAtual= escalaAtual.toUpperCase(),
        escalaFutura = escalaFutura.toUpperCase();
        
        if (escalaAtual === "C"){
            if (escalaFutura === "F"){
                tempConvertida = `Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${((temperatura * 1.8) + 32).toFixed(2)}°F`;
            }else if (escalaFutura === "K"){
                tempConvertida =`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${(temperatura + 273.15).toFixed(2)} K`;
            }else if (escalaFutura === "C"){
                msgErro = `Temperatura a ser convertida: ${temperatura}°C --> Escolha outra escala para conversão!`;
            }else{
                msgErro = `A escala de CONVERSÃO não existe ou não esta disponivel nesse programa.`;
            }
        }else if (escalaAtual === "F"){
            if (escalaFutura === "C"){
                tempConvertida = `Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${((temperatura - 32) / 1.8).toFixed(2)}°C`;
            }else if (escalaFutura === "K"){
                tempConvertida = `Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${((temperatura - 32) * 5/9 + 273.15).toFixed(2)} K`;
            }else if (escalaFutura === "F"){
                msgErro = `Temperatura a ser convertida: ${temperatura}°F --> Escolha outra escala para conversão!`;
            }else{
                msgErro = `A escala de CONVERSÃO não existe ou não esta disponivel nesse programa.`;
            }
        }else if(escalaAtual === "K"){
            if (escalaFutura === "C"){
                tempConvertida = `Temperatura a ser convertida: ${temperatura} K --> Após conversão: ${(temperatura - 273.15).toFixed(2)}°C`;
            }else if (escalaFutura === "F"){
                tempConvertida = `Temperatura a ser convertida: ${temperatura} K --> Após conversão: ${((temperatura - 273.15) * 1.8 + 32).toFixed(2)}°F`;
            }else if (escalaFutura === "K"){
                msgErro = `Temperatura a ser convertida: ${temperatura} K --> Escolha outra escala para conversão!`;
            }else{
                msgErro = `A escala de CONVERSÃO não existe ou não esta disponivel nesse programa.`;
            }
        }else{
            msgErro = `A escala ATUAL não existe ou não esta disponivel nesse programa.`;
        }
    }else{
            msgErro = 'Temperatura digitada não é um número! \nAtualize a página!';
    }
    return {
        temperatura: temperatura,
        escalaAtual: escalaAtual,
        escalaFutura: escalaFutura,
        tempConvertida: tempConvertida,
        msgErro: msgErro
    }
}