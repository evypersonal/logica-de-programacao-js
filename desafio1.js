// Escreva um código em JavaScriptque resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de 1 aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Não é necessário ler as notas, você pode defini-las com variáveis.

const 
    nota1 = 10, 
    nota2 = 3, 
    nota3 = 3,
    media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`APROVADO com nota média ${media.toFixed(2)}`);
} else if (media >= 5) {
    console.log(`EXAME com nota média ${media.toFixed(2)}`);
} else {
    console.log(`REPROVADO com nota média ${media.toFixed(2)}`);
}