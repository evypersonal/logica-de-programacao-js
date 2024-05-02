// <a> do Home
const aHome = document.createElement('a');
aHome.setAttribute('href', '/index.html');
aHome.innerHTML = 'Home';

// <li> do Home
const liHome = document.createElement('li');
liHome.appendChild(aHome);

// <a> do Desafio 1
const aDesafio1 = document.createElement('a');
aDesafio1.setAttribute('href', '/html/calculadora-de-media.html');
aDesafio1.innerHTML = 'Desafio 1';

// <li> do Desafio 1
const liDesafio1 = document.createElement('li');
liDesafio1.appendChild(aDesafio1);

// <a> do Desafio 2
const aDesafio2 = document.createElement('a');
aDesafio2.setAttribute('href', '/html/calculadora-imc.html');
aDesafio2.innerHTML = 'Desafio 2';

// <li> do Desafio 2
const liDesafio2 = document.createElement('li');
liDesafio2.appendChild(aDesafio2);

// <a> do Desafio 3
const aDesafio3 = document.createElement('a');
aDesafio3.setAttribute('href', '/html/converte-temperatura.html');
aDesafio3.innerHTML = 'Desafio 3';

// <li> do Desafio 3
const liDesafio3 = document.createElement('li');
liDesafio3.appendChild(aDesafio3);

// <a> do Exercicio 1
const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '/html/classificacao-triangulo.html');
aExercicio1.innerHTML = 'Exercício 1';

// <li> do Exercicio 1
const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

// <a> do Exercicio 2
const aExercicio2 = document.createElement('a');
aExercicio2.setAttribute('href', '/html/placar-de-jogo.html');
aExercicio2.innerHTML = 'Exercício 2';

// <li> do Exercicio 2
const liExercicio2 = document.createElement('li');
liExercicio2.appendChild(aExercicio2);

// <ul> do Nav
const ulNav = document.createElement('ul');
ulNav.append(liHome, liDesafio1, liDesafio2, liDesafio3, liExercicio1, liExercicio2);

// <nav> Elemento Nav
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav)

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

