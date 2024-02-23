const lista_menu = document.getElementsByClassName('lista-menu')[0];

/*lista_menu[0].innerHTML = 
'<li><a href="../index.html">Inicio</a></li>' +
'<li><a href="calculadora.html">Calculadora</a></li>' +
'<li><a href="Carrusel.html">Carrucel</a></li>' +
'<li><a href="Fondos.html">Fondos</a></li>' +
'<li><a href="juegoDeDados.html">Juego de dados</a></li>' +
'<li><a href="formularioContacto.html">Contacto</a></li>';*/

const lista = ['Inicio', 'Calculadora', 'Carrusel', 'Fondos', 'Juego de dados', 'Contacto'];
const links = ['../index.html', "calculadora.html", "carrusel.html", "Fondos.html", "juegoDeDados.html", "formularioContacto.html"];
const li = document.createElement('li');

links.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link;  
    a.innerText = lista[i];  
    li.appendChild(a)
    lista_menu.appendChild(li);
});
