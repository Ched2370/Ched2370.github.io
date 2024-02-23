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

const img = document.getElementById('img');
const ant = document.getElementById('ant');
ant.addEventListener('click', anterior);
const sig = document.getElementById('sig');
sig.addEventListener('click', siguiente);

var contador = 0;
const interv = setInterval(auto, 3000);

function auto() {
  try {
    if (contador >= imagenes.length) {
      contador = 0;
    }
    img.src = imagenes[contador];
    contador ++;
  } catch (err) {
    alert('HA surjido un error ' + err.message);
  }
}

function siguiente() {
  try {
    if (contador >= imagenes.length) {
      contador = 0;
    }
    img.src = imagenes[contador];
    contador ++;
  } catch (err) {
    alert('HA surjido un error ' + err.message);
  }
}

function anterior() {
  try {
    contador --;
    if (contador < 0) {
      contador = imagenes.length - 1;
    }
    img.src = imagenes[contador];
  } catch (err) {
    alert('HA surjido un error ' + err.message);
  }
}