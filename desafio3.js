
const 
    temperatura = parseFloat(window.prompt("Digite a temperatura que deseja converter: ")),
    escalaAtual = window.prompt("Digite a escala atual dessa temperatura (F , C, K): ").toUpperCase(),
    escalaFutura = window.prompt("Digite a escala que deseja converter (F, C, K): ").toUpperCase();
    
    // Conversão de Celsius para Farenheit e para Kelvin
if (!isNaN(temperatura)){
    if (escalaAtual == "C"){
        if (escalaFutura == "F"){
            window.alert (`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${((temperatura * 1.8) + 32).toFixed(2)}°F`);
        }else if (escalaFutura == "K"){
            window.alert(`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${(temperatura + 273.15).toFixed(2)} K`);
        }else {
            window.alert(`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${temperatura}°C`);
        }
    }else if (escalaAtual == "F"){
        if (escalaFutura == "C"){
            window.alert(`Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${((temperatura - 32) / 1.8).toFixed(2)}°C`);
        }else if (escalaFutura == "K"){
            window.alert(`Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${((temperatura - 32) * 5/9 + 273.15).toFixed(2)} K`);
        }else{
            window.alert(`Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${temperatura}°F`);
        }
    }else{
        if (escalaFutura == "C"){
            window.alert(`Temperatura a ser convertida: ${temperatura} K --> Após conversão: ${(temperatura - 273.15).toFixed(2)}°C`);
        }else if (escalaFutura == "F"){
            window.alert(`Temperatura a ser convertida: ${temperatura} K --> Após conversão: ${((temperatura - 273.15) * 1.8 + 32).toFixed(2)}°F`);
        }else {
            window.alert(`Temperatura a ser convertida: ${temperatura} K --> Após conversão: ${temperatura} K`);
        }
    }
}else{
    window.alert('Temperatura digitada não é um número! Atualize a página!')
}