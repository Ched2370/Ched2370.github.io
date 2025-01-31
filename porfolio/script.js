let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById('nav').classList = '';
    menuVisible = false;
  } else {
    document.getElementById('nav').classList = 'responsive';
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById('nav').classList = '';
  menuVisible = false;
}

function verCV() {
  window.open('ruta/del/cv.pdf', '_blank');
}

/*traigo los proyectos*/
const galeria = document.querySelector('.galeria');
fetch('./asset/proyectos.json')
  .then((response) => response.json())
  .then((data) => {
    const proyect = data.reverse();

    proyect.forEach((element) => {
      const proyecto = document.createElement('div');
      proyecto.classList = 'proyecto';
      const linkProyecto = document.createElement('a');
      linkProyecto.href = element.web;
      linkProyecto.target = '__blank';
      const img = document.createElement('img');
      img.src = element.img;
      const overlay = document.createElement('div');
      overlay.classList = 'overlay';
      const titulo = document.createElement('h3');
      titulo.textContent = element.title;
      const parrafo = document.createElement('p');
      //parrafo.textContent = element.descripcion;
      overlay.appendChild(titulo);
      overlay.appendChild(parrafo);
      linkProyecto.appendChild(img);
      linkProyecto.appendChild(overlay);
      proyecto.appendChild(linkProyecto);
      galeria.appendChild(proyecto);
    });
  })
  .catch((error) => console.log(error));
