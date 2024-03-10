/* arreglo para cargar las direcciones de las imagenes */
const imagenes = 
['../imagenes/carrusel/carru1.png', 
'../imagenes/carrusel/carru2.png', 
'../imagenes/carrusel/carru3.png', 
'../imagenes/carrusel/carru4.png', 
'../imagenes/carrusel/carru5.png',
'../imagenes/carrusel/carru6.png',
'../imagenes/carrusel/carru7.png',
'../imagenes/carrusel/carru8.png',
'../imagenes/carrusel/carru9.png'
];
/* capturamos el tag img */
const img = document.getElementById('img');
/* capturamos el boton anterior */
const ant = document.getElementById('ant');
/* le agregamos un evenlistener hacia la funcion anterior() */
ant.addEventListener('click', anterior);
const sig = document.getElementById('sig');
sig.addEventListener('click', siguiente);
/* creamos un contador */
var contador = 0;
/* realizamos un setInterval para que las imagenes pasen automaticamente */
const interv = setInterval(auto, 3000);

/* creamos la funcion auto */
function auto() {
  /* creamos un bloque try catch en caso que surjan errores */
  try {
    contador ++;
    /* creamos un condicinal if para resetear el contador cada vez que llegue a la longitud del arreglo */
    if (contador >= imagenes.length) {
      contador = 0;
    }
    /* utilizamos el contador como indice para indicar que imagen debe mostrar */
    img.src = imagenes[contador];
  } catch (err) {
    /*  sacmos un alert x si salta algun error */
    alert('Ha surjido un error ' + err.message);
  }
}

/* creamos la funcion siguiente */
function siguiente() {
  try {
    contador ++;
    if (contador >= imagenes.length) {
      contador = 0;
    }
    img.src = imagenes[contador];
  } catch (err) {
    alert('Ha surjido un error ' + err.message);
  }
}

/* creamos la funcion anterior */
function anterior() {
  try {
    contador --;
    if (contador < 0) {
      contador = imagenes.length - 1;
    }
    img.src = imagenes[contador];
  } catch (err) {
      alert('Ha surjido un error ' + err.message);
  }
}