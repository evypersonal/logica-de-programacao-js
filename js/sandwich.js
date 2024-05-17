/* <button type="button" id="btMenu">Menu</button> */
{/* <button type="button" id="btFechar" class="menu-sandwich-oculto">Fechar</button> */}

// const buttonM = document.createElement('button');
// buttonM.setAttribute('type', 'button');
// buttonM.setAttribute('id', 'btMenu');
// // buttonM.setAttribute('class', 'menu-sandwich-oculto');
// buttonM.innerHTML = '☰';

// const buttonF = document.createElement('button');
// buttonF.setAttribute('type', 'button');
// buttonF.setAttribute('id', 'btFechar');
// buttonF.setAttribute('class', 'menu-sandwich-oculto');
// buttonF.innerHTML = '︽';

// Fazendo append
// document.body.append(buttonM, buttonF);

/* <header>
<div class="logo-menu">
    <button>Test</button>
    <div class="logo">
        <span>Desafios & Exercicios</span>
    </div>
</div>
</header> */
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.setAttribute('class', 'menu-fake');

const span1 = document.createElement('span')
const span2 = document.createElement('span')
const span3 = document.createElement('span')

const divLinha = document.createElement('div');
divLinha.setAttribute('class', 'menu-linhas')
divLinha.append(span1,span2,span3)

const ancoras = [
    { "url": "/html/desafio1.html", "texto": "Desafio 1" }, 
    { "url": "/html/desafio2.html", "texto": "Desafio 2" }, 
    { "url": "/html/desafio3.html", "texto": "Desafio 3" }, 
    { "url": "/html/exercicio1.html", "texto": "Exercicio 1" }, 
    { "url": "/html/exercicio2.html", "texto": "Exercicio 2" },
    { "url": "/html/exercicio3.html", "texto": "Exercicio 3" },
    { "url": "/html/exercicio4.html", "texto": "Exercicio 4" },
    { "url": "/html/exercicio5.html", "texto": "Exercicio 5" },
    { "url": "/html/exercicio6.html", "texto": "Exercicio 6" },
    { "url": "/html/exercicio7.html", "texto": "Exercicio 7" },
];


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

const navH = document.createElement('nav');
navH.setAttribute('class', 'menu')
navH.append(input, divLinha, (criaUlNav(ancoras)))

// separação

// const spanL = document.createElement('span')
// spanL.innerHTML = 'Desafios & Exercicios'

// const headerNav = document.createElement('headerNav');
// headerNav.append(divMenu);


// const ancoras = document.createElement('a');
// ancoras.setAttribute('href', '/html/classificacao-triangulo.html') 
// ancoras.innerHTML = 'Exercicio 1'

// const div = document.createElement('div');
// div.setAttribute('id', 'menu-sandwich');
// div.setAttribute('class', 'menu-sandwich-oculto')
// div.append(criaUlNav(ancoras))


// document.body.append(divMenu,div)

// document.querySelector('#btMenu').addEventListener('click', () =>{
//     document.querySelector('#menu-sandwich').classList.remove('menu-sandwich-oculto')
//     document.querySelector('#btMenu').classList.add('menu-sandwich-oculto')
//     document.querySelector('#btFechar').classList.remove('menu-sandwich-oculto')

// })
// document.querySelector('#btFechar').addEventListener('click',() =>{
//     document.querySelector('#menu-sandwich').classList.add('menu-sandwich-oculto')
//     document.querySelector('#btFechar').classList.add('menu-sandwich-oculto')
//     document.querySelector('#btMenu').classList.remove('menu-sandwich-oculto')
// })


// Array contendo ancoras de entrada
// const ancoras = [
//     { "url": "/index.html", "texto": "Home" }, 
//     { "url": "/html/calculadora-de-media.html", "texto": "Desafio 1" }, 
//     { "url": "/html/calculadora-imc.html", "texto": "Desafio 2" }, 
//     { "url": "/html/converte-temperatura.html", "texto": "Desafio 3" }, 
//     { "url": "/html/classificacao-triangulo.html", "texto": "Exercicio 1" }, 
//     { "url": "/html/desconto.html", "texto": "Exercicio 2" },
//     { "url": "/html/placar-de-jogo.html", "texto": "Exercicio 3" },
//     { "url": "/html/busca-de-um-nome-automatico.html", "texto": "Exercicio 4" },
//     { "url": "/html/posto-de-gasolina.html", "texto": "Exercicio 5" },
//     { "url": "/html/produtos-com-desconto.html", "texto": "Exercicio 6" },
//     { "url": "/html/taxa-de-natalidade.html", "texto": "Exercicio 7" },
// ];

// Função que cria a ancora
// function criaAncora(url, texto){

//     const ancora = document.createElement('a');
//     ancora.setAttribute('href', url);
//     ancora.innerHTML = texto;

//     return ancora;
// }

// Função que cria o li e apende a ancora dentro
// function criaLista(ancora){

//     const lista = document.createElement('li');
//     lista.appendChild(ancora);

//     return lista;
// }

// Função que cria a ul // acessa a array // chama as duas funções anteriores// apende o li dentro
// function criaUlNav(ancoras){
//     const ul = document.createElement('ul');
    
//     ancoras.forEach((ancora) => {
//         const a = criaAncora(ancora.url, ancora.texto);
//         const li = criaLista(a);
//         ul.appendChild(li);
//     });
//     return ul;
// } 

// <nav> Elemento Nav
// const nav = document.createElement('nav');
// nav.classList.add('menu-navegacao');
// nav.appendChild(criaUlNav(ancoras));
// chamando a função de criação da Ul;

// <span> Elemento span
// const spanLogo = document.createElement('span');
// spanLogo.innerHTML = 'Desafios & Exercicios';

// // <div> Elemento div com a classe 'logo'
// const divLogo = document.createElement('div');
// divLogo.classList.add('logo');
// divLogo.appendChild(spanLogo);


// <div> Elemento divcom a classe 'logo-menu'
// const divLogoMenu = document.createElement('div');
// divLogoMenu.classList.add('logo-menu');
// divLogoMenu.append(divLogo, );

// <header> Elemento Header
// const header = document.createElement('header');
// header.appendChild(divLogoMenu);

// utilizando métodos para anexar os elementos no lugar certo
// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', navH)


// Estilos do NAVBAR
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
// linkNavbar.setAttribute('href', '/css/navbar.css');
linkNavbar.setAttribute('href', '/css/navbar-sandwich.css');


// Mudando a ordem do link navbar para que seja aplicado a responsividade por último//
document.querySelector('[href="/css/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);