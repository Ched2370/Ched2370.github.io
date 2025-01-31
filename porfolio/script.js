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
//Funcion que aplica las animaciones de las habilidades
/* function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
} */

//detecto el scrolling para aplicar la animacion de la barra de habilidades
/* window.onscroll = function () {
  efectoHabilidades();
}; */

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
      proyecto.appendChild(img);
      proyecto.appendChild(overlay);
      galeria.appendChild(proyecto);
    });
  })
  .catch((error) => console.log(error));
