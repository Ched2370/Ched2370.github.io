/* llamamos el elemento btnFormulario */
const btn = document.getElementById("btnFormulario");
/* creamos un evenlistener para definir la accion */
btn.addEventListener("click", validar);
/* llamamos a la cabecera de la tabla */
const thead = document.getElementById("thead");
/* llamamos el cuerpo de la tabla */
const tbody = document.getElementById("tbody");
/* creamos una bandera, para saber si la tabla donde se cargaran los datos tiene cabecera */
var bandera = false;
/* creamos la funcion validar() */

/* un listener para escuchar los cambios en la window o cuando se carga la pagina */
window.addEventListener("DOMContentLoaded", cargarTabla);
/* funcion para agregar los datos guardados en localstorage a la tabla */
function cargarTabla() {
  const datosG = JSON.parse(localStorage.getItem("datos"));
  if (datosG) {
    datosG.forEach((dato) => {
      agregar(dato);
    });
  }
}

function validar() {
  try {
    /* eliminamos los elementos de clase advertencia que se crean mas abajo x cada evento de click */
    const eliminar = document.querySelectorAll(".advertencia");
    eliminar.forEach((eliminar) => {
      eliminar.remove();
    });
    /* llamomos las tag que vamos a utilizar */
    const apellido = document.getElementById("apellido");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("e-mail");
    const textarea = document.getElementById("textarea");
    /* creamos los patrones de validacion de los campos */
    const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/;
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const patronConsulta = /^[a-zA-Z0-9.-_?,!\s]+$/;
    /* creamos un arreglo y le cargamos los valores de los campos */
    const datos = [apellido.value, nombre.value, email.value, textarea.value];
    /* console.log(datos);
      console.log(patron.test(apellido.value));
      console.log(patron.test(nombre.value));
      console.log(patronEmail.test(email.value));
      console.log(patronConsulta.test(textarea.value)); */

    /* realizamos un condicional if para validar los campos */
    if (
      apellido.value &&
      nombre.value &&
      email.value &&
      textarea.value &&
      patron.test(apellido.value) &&
      patron.test(nombre.value) &&
      patronEmail.test(email.value) &&
      patronConsulta.test(textarea.value)
    ) {
      /* en caso que los campos sean  correctos, llamamos a la funcion agregar y pasamos el argumento datos */
      agregar(datos);
      /*   console.log('paso'); */
    } else {
      /* en caso que no sea validados los datos creamos una varible padre donde se va a volcar los datos 
      segun los campos que falta compretar o corregir */
      let padre = document.querySelectorAll(".lbl");
      /* en caso que el error sea en apellido */
      if (!apellido.value || !patron.test(apellido.value)) {
        let ape = document.createElement("p");
        ape.className = "advertencia";
        ape.innerHTML = "agrege su apellido*";
        ape.style.color = "crimson";
        padre[0].appendChild(ape);
        apellido.insertAdjacentElement("afterend", ape);
      }
      /* en caso que el error sea en nombre */
      if (!nombre.value || !patron.test(nombre.value)) {
        let nom = document.createElement("p");
        nom.className = "advertencia";
        nom.innerHTML = "agrege su nombre*";
        nom.style.color = "crimson";
        padre[1].appendChild(nom);
        nombre.insertAdjacentElement("afterend", nom);
      }
      /* en caso que el error sea en email */
      if (!email.value || !patronEmail.test(email.value)) {
        let mail = document.createElement("p");
        mail.className = "advertencia";
        mail.innerHTML = "agrege su e-mail*";
        mail.style.color = "crimson";
        padre[2].appendChild(mail);
        email.insertAdjacentElement("afterend", mail);
      }
      /* en caso que el error sea en consulta */
      if (!textarea.value || !patronConsulta.test(textarea.value)) {
        let text = document.createElement("p");
        text.className = "advertencia";
        text.innerHTML = "agrege su consulta*";
        text.style.color = "crimson";
        padre[3].appendChild(text);
        textarea.insertAdjacentElement("afterend", text);
      }
      /* console.log("no paso"); */
    }
  } catch (err) {
    alert("¡Ha ocurrido un error!" + err.message);
  }
}


/* creamos la funcion agregar(datos) si paso todos los parametros */
function agregar(d) {
  try {
    /* creamos un condicional, para saber si en la tabla no hay cabecera cree una,
     al cargar la pagina bandera es false, una vez creado el encabezado sera true 
     y no volvera a entrar hasta recargar la pagina*/
    if (!bandera) {
      let cabeceraDatos = ["Apellido", "Nombre", "Email", "Mensaje"];
      let fila = document.createElement("tr");
      thead.appendChild(fila);
      for (let i = 0; i < cabeceraDatos.length; i++) {
        let cabecera = document.createElement("th");
        cabecera.textContent = cabeceraDatos[i];
        fila.appendChild(cabecera);
        bandera = true;
      }
    }
    /*  console.log("Paso");
    console.log(d); */
    let fila = document.createElement("tr");
    tbody.appendChild(fila);
    for (let i = 0; i < d.length; i++) {
      let columna = document.createElement("td");
      console.log(d[i]);
      columna.innerText = d[i];
      fila.appendChild(columna);
    }
    /* Tomo los datos en localstorage */
    let datosG = JSON.parse(localStorage.getItem("datos")) || [];
    datosG.push(d);
    /* filtro los datos para que no se generen datos repetidos en el localstorage */
    let datosU = datosG.filter((item, index, array) => {
      for (let i = index + 1; i < array.length; i++) {
        if (JSON.stringify(item) === JSON.stringify(array[i])) {
          return false;
        }
      }
      return true;
    });
    /* limpio el localstorage */
    localStorage.clear();
    localStorage.setItem("datos", JSON.stringify(datosU));
    /* reseteamos los campos */
    apellido.value = "";
    nombre.value = "";
    email.value = "";
    textarea.value = "";
  } catch (err) {
    alert("Ha surjido  un error");
  }
}
