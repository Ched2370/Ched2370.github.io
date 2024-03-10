/* llamos a una tag style que se encuentra en el head del html */
const style = document.getElementById('style');
/* le cargamos un fondo al body */
style.innerHTML = 'body {background-image: url(../imagenes/fondos/eclipse.jpg);}';
/* creamos una foncion para cargar el fondo rojo cada vez que el mouse pase por ensima del div correspondiente */
function rojo(){
    style.innerHTML = 'body {background-color: red;}';
}
/* creamos una foncion para cargar el fondo azul cada vez que el mouse pase por ensima del div correspondiente */
function azul(){
    style.innerHTML = 'body {background-color: blue;}';
}
/* creamos una foncion para cargar el fondo blanco cada vez que el mouse pase por ensima del div correspondiente */
function blanco(){
    style.innerHTML = 'body {background-color: white;}' +
    '.enunciado { color: black; }';;
}
/* creamos una foncion para cargar el fondo amarillo cada vez que el mouse pase por ensima del div correspondiente */
function amarillo(){
    style.innerHTML = 'body { background-color: yellow; }' +
    '.enunciado { color: black; }';
}
/* creamos una foncion para cargar el fondo verde cada vez que el mouse pase por ensima del div correspondiente */
function verde(){
    style.innerHTML = 'body {background-color: green;}';
}
/* creamos una funcion para que sea llamada por los div cada vez que el mouse sale de ensima de estos para
devolver el fondo correspondiente */
function salida() {
    style.innerHTML = 'body {background-image: url(../imagenes/fondos/eclipse.jpg);}';
}
/* las funciones son llamadas de forma linear desde el html */
