// Array contendo ancoras de entrada
const ancoras = [
    { "url": "/index.html", "texto": "Home" }, 
    { "url": "/html/calculadora-de-media.html", "texto": "Desafio 1" }, 
    { "url": "/html/calculadora-imc.html", "texto": "Desafio 2" }, 
    { "url": "/html/converte-temperatura.html", "texto": "Desafio 3" }, 
    { "url": "/html/classificacao-triangulo.html", "texto": "Exercicio 1" }, 
    { "url": "/html/desconto.html", "texto": "Exercicio 2" },
    { "url": "/html/placar-de-jogo.html", "texto": "Exercicio 3" },
    { "url": "/html/busca-de-um-nome-automatico.html", "texto": "Exercicio 4" },
    { "url": "/html/posto-de-gasolina.html", "texto": "Exercicio 5" },
    { "url": "/html/produtos-com-desconto.html", "texto": "Exercicio 6" },
    { "url": "/html/taxa-de-natalidade.html", "texto": "Exercicio 7" },
];

// Função que cria a ancora
function criaAncora(url, texto){

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;
}

// Função que cria o li e apende a ancora dentro
function criaLista(ancora){

    const lista = document.createElement('li');
    lista.appendChild(ancora);

    return lista;
}

// Função que cria a ul // acessa a array // chama as duas funções anteriores// apende o li dentro
function criaUlNav(ancoras){
    const ul = document.createElement('ul');
    
    ancoras.forEach((ancora) => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLista(a);
        ul.appendChild(li);
    });
    return ul;
}

// // <a> do Home
// const aHome = criaAncora('/index.html', 'Home');

// // <li> do Home
// const liHome = criaLista(aHome);

// // <a> do Desafio 1
// const aDesafio1 = criaAncora('/html/calculadora-de-media.html', 'Desafio 1');


// // <li> do Desafio 1
// const liDesafio1 = criaLista(aDesafio1);

// // <a> do Desafio 2
// const aDesafio2 = criaAncora('/html/calculadora-imc.html', 'Desafio 2');

// // <li> do Desafio 2
// const liDesafio2 = criaLista(aDesafio2);

// // <a> do Desafio 3
// const aDesafio3 = criaAncora('/html/converte-temperatura.html', 'Desafio 3');

// // <li> do Desafio 3
// const liDesafio3 = criaLista(aDesafio3);

// // <a> do Exercicio 1
// const aExercicio1 = criaAncora('/html/classificacao-triangulo.html', 'Exercício 1')

// // // <li> do Exercicio 1
// const liExercicio1 = criaLista(aExercicio1);

// // // <a> do Exercicio 2
// const aExercicio2 = criaAncora('/html/desconto.html', 'Exercício 2')

// // // <li> do Exercicio 2
// const liExercicio2 = criaLista(aExercicio2);

// // <a> do Exercicio 3
// const aExercicio3 = document.createElement('a');
// aExercicio3.setAttribute('href', '/html/placar-de-jogo.html');
// aExercicio3.innerHTML = 'Exercício 3';

// // <li> do Exercicio 3
// const liExercicio3 = document.createElement('li');
// liExercicio3.appendChild(aExercicio3);

// const aExercicio4 = document.createElement('a');
// aExercicio4.setAttribute('href', 'busca-de-um-nome-automatico.html');
// aExercicio4.innerHTML = 'Exercício 4';

// const liExercicio4 = document.createElement('li');
// liExercicio4.append(aExercicio4);

// // <a> do Exercicio 5
// const aExercicio5 = document.createElement('a');
// aExercicio5.setAttribute('href', '/html/placar-de-jogo.html');
// aExercicio5.innerHTML = 'Exercício 5';

// // <li> do Exercicio 5
// const liExercicio5 = document.createElement('li');
// liExercicio5.appendChild(aExercicio5);

// // <a> do Exercicio 6
// const aExercicio6 = document.createElement('a');
// aExercicio6.setAttribute('href', '/html/placar-de-jogo.html');
// aExercicio6.innerHTML = 'Exercício 6';

// // <li> do Exercicio 6
// const liExercicio6 = document.createElement('li');
// liExercicio6.appendChild(aExercicio6);

// // <a> do Exercicio 7
// const aExercicio7 = document.createElement('a');
// aExercicio7.setAttribute('href', '/html/placar-de-jogo.html');
// aExercicio7.innerHTML = 'Exercício 7';

// // <li> do Exercicio 7
// const liExercicio7 = document.createElement('li');
// liExercicio7.appendChild(aExercicio7);


// <ul> do Nav
// const ulNav = document.createElement('ul');
// ulNav.append(liHome, liDesafio1, liDesafio2, liDesafio3, liExercicio1, liExercicio2);

// <nav> Elemento Nav
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));
// chamando a função de criação da Ul;

// <span> Elemento span
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios & Exercicios';

// <div> Elemento div com a classe 'logo'
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);


// <div> Elemento divcom a classe 'logo-menu'
const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.append(divLogo, nav);

// <header> Elemento Header
const header = document.createElement('header');
header.appendChild(divLogoMenu);

// utilizando métodos para anexar os elementos no lugar certo
// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header)


// Estilos do NAVBAR
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.head.appendChild(linkNavbar);
