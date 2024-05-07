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

function criaDiv(ul){
    const menu = document.createElement('div')
    menu.appendChild(ul);

    return menu;
}

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

// Mudando a ordem do link navbar para que seja aplicado a responsividade por último//
document.querySelector('[href="/css/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);