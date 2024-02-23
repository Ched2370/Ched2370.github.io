const lista_menu = document.getElementsByClassName('lista-menu')[0];

/*lista_menu[0].innerHTML = 
'<li><a href="Inicio.html">Inicio</a></li>' +
'<li><a href="paginas/calculadora.html">Calculadora</a></li>' +
'<li><a href="paginas/carrucel.html">Carrucel</a></li>' +
'<li><a href="paginas/Fondos.html">Fondos</a></li>' +
'<li><a href="paginas/juegoDeDados.html">Juego de dados</a></li>' +
'<li><a href="paginas/formularioContacto.html">Contacto</a></li>';*/

const lista = ['Inicio', 'Calculadora', 'Carrusel', 'Fondos', 'Juego de dados', 'Contacto'];
const links = ['index.html', "paginas/calculadora.html", "paginas/carrusel.html", "paginas/fondos.html", "paginas/juegoDeDados.html", "paginas/formularioContacto.html"];
const li = document.createElement('li');

links.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link;  
    a.innerText = lista[i];  
    li.appendChild(a)
    lista_menu.appendChild(li);
});


