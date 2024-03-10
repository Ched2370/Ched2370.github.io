/* llamamos al nav x su clase y index */
const lista_menu = document.getElementsByClassName('lista-menu')[0];
/* creamos una arreglo con la lista a navegar */
const lista = ['Inicio', 'Calculadora', 'Carrusel', 'Fondos', 'Dados', 'Contacto'];
/* creamos un arreglo con sus ubicaciones */
const links = ['index.html', "paginas/calculadora.html", "paginas/carrusel.html", "paginas/fondos.html", "paginas/juegoDeDados.html", "paginas/formularioContacto.html"];
/* utilizamos createElement en un variable */
const li = document.createElement('li');
/* hacemos un foreach para que cree el listado y los agregue al html */
links.forEach((link, i) => {
    const a = document.createElement('a');
    a.href = link;  
    a.innerText = lista[i];  
    li.appendChild(a)
    lista_menu.appendChild(li);
});


