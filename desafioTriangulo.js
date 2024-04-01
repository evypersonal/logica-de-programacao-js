function comparador(ladoA, ladoB, ladoC){
    let mensagem;

    if ((ladoA < ladoB + ladoC) && (ladoA === ladoB) && (ladoB === ladoC)){
        mensagem = "Todos os lados são iguais, portanto é um triângulo Equilátero"
    }
    return mensagem;
}