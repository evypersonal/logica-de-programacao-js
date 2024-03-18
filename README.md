# logica-de-programacao-js
Treinando lógica da programação com JavaScript__Aulas SENAI- Ford <ENTER>

## operadores-aritmeticos.js

~~~js
const num1 = 40;
const num2 = 20;
~~~
A palavra `const` é utilizada para declaração de variáveis que não serão **REATRIBUIDAS** _(não permite reatribuição)_. 

Aqui declaramos duas constantes que serão calculadas no bloco a seguir:

~~~js
console.log(`Os números das operações são ${num1} e ${num2}`);
console.log(`A soma dos números é ${num1 + num2}`);
console.log(`A subtração dos números é ${num1 - num2}`);
console.log(`A multiplicação dos números é ${num1 * num2}`);
console.log(`A divisão dos números é ${num1 / num2}`);
console.log(`O resto da divisão dos números é ${num1 % num2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+`       ->  __Soma__

* `-`       ->  __Subtração__

* `*`       ->  __Multiplicação__

* `/`       ->  __Divisão__

* `%`       ->  __Resto da divisão__

## operadores-atribuicao.js

~~~js
let number = 10;
~~~

Declaramos a variável `number` usando a palavra `let`, pois essa variável será **REATRIBUIDA** _(permite reatribuição)_ ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição:

~~~js
console.log(`O número é inicialmente igual a ${number}`);
console.log(`Somando 10 e reatribuindo 10: ${number += 30}`);
console.log(`Subtraindo 30 e reatribuindo: ${number -= 10}`);
console.log(`Multiplicando por 40 e reatribuindo: ${number *= 40}`);
console.log(`Dividindo por 10 e reatribuindo: ${number /= 10}`);
console.log(`Reatribuindo o resto da divisão por 7: ${number %= 7}`);
console.log(`Incrementando o número em 1: ${++ number}`);
console.log(`Decrementando o número em 1: ${-- number}`);
console.log(`O número final é igual: ${number}`);
~~~

Em cada uma das atribuições, temos um operador de atribuição:

* `+=`      ->  __Atribuição com Soma__
* `-=`      ->  __Atribuição com Subtração__
* `*=`      ->  __Atribuição com Multiplicação__
* `/=`      ->  __Atribuição com Divisão__
* `%=`      ->  __Atribuição com o Resto da Divisão__
* `++`      ->  __Atribuição com *INCREMENTO 1* (pode ser `pré` ou `pós` incrementado)__
* `--`      ->  __Atribuição com *DECREMENTO 1* (pode ser `pré` ou `pós` decrementado)__
* `++ number` && `-- number`       -> __Atribuição de `pré-incrementado` / `pré-decrementado`__
* `number ++` && `number --`       -> __Atribuição de `pós-incrementado` / `pós-decrementado`__

## operadores-comparacao.js

~~~js
const a = 50, b = '50';
const condition = a === b;
~~~

Declaramos as variáveis `a` e `b` usando a palavra `const`, pois as variáveis **NÃO** serão **REATRIBUIDAS** ao longo do código.
Além de declarar a variável `condition` usando também a palavra `const`, na qual seu devido valor é comparar as duas variáveis `a` e `b`.

Em seguida utilizei uma estrutura de comparação `IF-ELSE`, para imprimir na tela se a condição (variável `condition`) é `TRUE` ou `FALSE`:

~~~js
if (condition) {
    console.log('TRUE');
} else {
    console.log('FALSE')
}
~~~

Dentro da variável `condition` foi possível testar os operadore de comparação a seguir:

* `==`      -> __O valor é igual;__
* `===`     -> __É extritamente igual (valor e tipo);__
* `!= `     -> __Não é igual;__
* `!==`     -> __Não é extritamente igual (valor e tipo);__
* `>`       -> __Maior que;__
* `<`       -> __Menor que;__
* `>=`      -> __Maior OU Igual;__
* `<= `     -> __Menor OU Igual;__

## desafio1.js

<!-- Escreva um código em JavaScriptque resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de 1 aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para examde. Não é necessário ler as notas, você pode defini-las com variáveis. -->
~~~js
const nota1 = 10, nota2 = 3, nota3 = 3;
const media = (nota1 + nota2 + nota3) / 3;
~~~

No código acima declarei as variáveis `nota1`, `nota2` e `nota3` como `const` para atribuir os valores das notas do determinado aluno;
Além de declar uma variável `media` sendo também `const` para atribuir a soma das 3 variáveis `nota1`, `nota2` e `nota3` e divir por 3, obtendo-se a média.

Logo após utilizei uma estrutura de condição `IF-ELSE` para determinar se o aluno está `APROVADO`, em `EXAME` ou `REPROVADO`:

~~~js
if (media >= 7) {
    console.log('APROVADO');
} else if (media >= 5) {
    console.log('EXAME');
} else {
    console.log('REPROVADO');
}
~~~

## desafio2.js

<!-- Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa. 

Orientações: 
* Utilize o método `prompt()` do objeto `window` para realizar a leitura dos dados de entrada.
* Utilize a fórmula **IMC = peso / altura²** para calcular o IMC.
* Utilize a estrutura **if-else** para classificar o IMC de acordo com a tabela da OMS: -->

~~~js
const 
    peso = window.prompt('Digite seu peso: ');
    altura = window.prompt('Digite sua altura:');
    imc = peso / (altura ** 2);
~~~

No código acima solicitei aos usuários para digitar seu `peso` através do `prompt` do navegador, e em seguida atribui a resposta na variável `peso`;
Fiz o mesmo com a variável `altura` no qual o usuário informa sua altura;
Por fim atribui à variável `imc` o calculo utilizado para obter o imc = peso / altura²;

Em seguida utilizei o seguinte código:

~~~js
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
~~~

Nele utilizei a estrutura de condição `IF-ELSE` juntamente com `operadores de comparação` para determinar em qual indicação de imc a pessoa se enquadra.

IMC | Indicação
----- | -----
Abaixo de 18,5	| Abaixo do peso
18,5 - 24,9	| Peso normal
25,0 - 29,9	| Sobrepeso
30,0 - 34,9	| Obesidade grau I
35,0 - 39,9	| Obesidade grau II
Acima de 40,0 |	Obesidade grau III

><p>Observações:</p>
><p>O IMC é apenas uma medida geral e não leva em consideração a composição corporal (músculos versus gordura).</p>
><p>Pessoas com muita massa muscular podem ter um IMC alto, mesmo que não sejam obesas.</p>
><p>É importante consultar um médico ou nutricionista para uma avaliação individualizada.</p>
><p>Para mais informações:<p>
><p>Organização Mundial da Saúde (OMS): </p> 
<https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight>

## desafio3.js

Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida e a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entradas (3): Valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

Saidas (1): Valor convertido na escala de conversão

### Fórmulas

De | Para | Fórmula
---|------|--------
Celsius | Fahrenheit | tF = (tC * 9/5) + 32
Celsius | Kelvin | tK = tC - 273.15
Farenheit | Celsius | tC = (tF - 32) * 5/9
Farenheit | Kelvin | tK = (tF + 459.67) * 5/9
Kelvin | Celsius | tC = tK + 273.15 
Kelvin | Farenheit | tF = (tK - 273.15) * 9/5 + 32

### Problema adicional

Como executar dois "programas" na mesma página?ol