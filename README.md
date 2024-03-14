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

* `+`     ->  __Soma__

* `-`     ->  __Subtração__

* `*`     ->  __Multiplicação__

* `/`     ->  __Divisão__

* `%`     ->  __Resto da divisão__

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

* `+=`     ->  __Atribuição com Soma__
* `-=`     ->  __Atribuição com Subtração__
* `*=`     ->  __Atribuição com Multiplicação__
* `/=`     ->  __Atribuição com Divisão__
* `%=`     ->  __Atribuição com o Resto da Divisão__
* `++`     ->  __Atribuição com *INCREMENTO 1* (pode ser `pré` ou `pós` incrementado)__
* `--`     ->  __Atribuição com *DECREMENTO 1* (pode ser `pré` ou `pós` decrementado)__
* `++ number` && `-- number`       -> __Atribuição de `pré-incrementado` / `pré-decrementado`__
* `number ++` && `number --`       -> __Atribuição de `pós-incrementado` / `pós-decrementado`__