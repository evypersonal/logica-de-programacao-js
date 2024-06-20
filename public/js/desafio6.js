


// JSON -> JavaScript Object Notation
const produtos = [
    {
        // atributos:valor
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado"
    },
    {
        // atributos:valor
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers"
    },
    {
        // atributos:valor
        codigo: 3,
        preco: 0.5,
        descricao: "Quebra-queixo"
    }
];
function calculaDesconto(codigoProduto, qtdeProduto){

    let preco;
    let desconto;
    let valorFinal;
    let descricao;
    for(let i = 0; i < produtos.length; i++){

        // Percorrer o vetor de produtos para pesquisa
        if(produtos[i].codigo === codigoProduto){

            // Se o código for igual ao procurado, obtém o preço
            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }
    }

    // Atribui o desonto com base na quantidade comprada
    if((qtdeProduto >= 3) && (qtdeProduto <= 5)){
        desconto = 0.02; // ou 2/100
    } else if ((qtdeProduto >= 6) && (qtdeProduto <= 10)){
        desconto = 0.03;
    } else if (qtdeProduto > 10){
        desconto = 0.05;
    } else {
        desconto = 0;
    } 

    valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

    // criando o retorno com JSON
    return {
        codigo: codigoProduto,
        preco: preco,
        descricao: descricao,
        valorFinal: valorFinal
    };

}

// TODO Obter os dados de produto a partir de um arquivo .json
// TODO Refatorar a função 