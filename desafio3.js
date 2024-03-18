
let temperatura = window.prompt("Digite a temperatura que deseja converter: ");
let escalaAtual = window.prompt("Digite a escala atual dessa temperatura (F , C, K): ");
let escalaFutura = window.prompt("Digite a escala que deseja converter (F, C, K): ");

const
    celsiusXFarenheit = (temperatura * 9/5) + 32,
    celsiusXKelvin = temperatura - 273.15,
    farenheitXCelsius = (temperatura - 32) * 5/9,
    farenheitXKelvin = (temperatura + 459.67) * 5/9,
    kevinXCelsius = temperatura + 273.15,
    kelvinXFarenheit = temperatura * 9/5 - 459.67;

if (escalaAtual == "C" || "c") {
    if (escalaFutura == "F" || "f"){
        window.alert (`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${celsiusXFarenheit}`)
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${celsiusXKelvin}`)
    }
}else if(escalaAtual == "F" || "f"){
    if (escalaFutura == "C" || "c"){
        window.alert(`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${farenheitXCelsius}`)
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${farenheitXKelvin}`)
    }
}else {
    if (escalaFutura == "C" || "c"){
        window.alert(`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${kevinXCelsius}`)
    }else {
        window.alert(`Temperatura a ser convertida: ${temperatura} --> Após conversão: ${kelvinXFarenheit}`)
    }
}
