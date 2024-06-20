const links = [
    { "rel": "stylesheet", "href":"public/css/reset.css"},
    { "rel": "stylesheet", "href":"public/css/style.css"},
    { "rel": "stylesheet", "href":"public/css/navbar-sandwich.css"},
    { "rel": "stylesheet", "href":"public/css/responsividade.css"}
];

// acessando a array// através do método "forEach" terá um lop de for que irá percorrer cada linha do json// com a variável "link" criada no método é possivel acessar cada linha por vez// Dentro da função será criado o elemento "link"; atribuir o "rel" no link; E atribuir o "href" no link;// Por fim, irá apendar no head.
links.forEach(link => {
    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l);
});