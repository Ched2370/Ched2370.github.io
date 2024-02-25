const style = document.getElementById('style');
style.innerHTML = 'body {background-image: url(../imagenes/fondos/eclipse.jpg);}';

function rojo(){
    style.innerHTML = 'body {background-color: red;}';
}
function azul(){
    style.innerHTML = 'body {background-color: blue;}';
}
function blanco(){
    style.innerHTML = 'body {background-color: white;}' +
    '.enunciado { color: black; }';;
}
function amarillo(){
    style.innerHTML = 'body { background-color: yellow; }' +
    '.enunciado { color: black; }';
}
function verde(){
    style.innerHTML = 'body {background-color: green;}';
}
function salida() {
    style.innerHTML = 'body {background-image: url(../imagenes/fondos/eclipse.jpg);}';
}
