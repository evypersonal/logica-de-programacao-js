
const 
    temperatura = window.prompt("Digite a temperatura que deseja converter: "),
    escalaAtual = window.prompt("Digite a escala atual dessa temperatura (F , C, K): "),
    escalaFutura = window.prompt("Digite a escala que deseja converter (F, C, K): ");

if (escalaAtual == "C" || escalaAtual == "c"){
    if (escalaFutura == "F" || escalaFutura == "f"){
        window.alert (`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${(temperatura * 1.8) + 32}°F`);
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura}°C --> Após conversão: ${temperatura + 273.15.toFixed(1)}K`);
    }
} else if (escalaAtual == "F" || escalaAtual == "f"){
    if (escalaFutura == "C" || escalaFutura == "c"){
        window.alert(`Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${(temperatura - 32) / 1.8}°C`);
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura}°F --> Após conversão: ${(temperatura - 32) * 5/9 + 273.15}K`);
    }
} else{
    if (escalaFutura == "C" || escalaFutura == "c"){
        window.alert(`Temperatura a ser convertida: ${temperatura}K --> Após conversão: ${temperatura - 273.15}°C`);
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura}K --> Após conversão: ${(temperatura - 273.15) * 1.8 + 32}°F`);
    }
}