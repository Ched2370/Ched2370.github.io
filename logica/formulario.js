const btn = document.getElementById("btnFormulario");
btn.addEventListener("click", validar);
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

var contador = 0;
function validar() {
  try {
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const textarea = document.getElementById("textarea").value;
    const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/;
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const patronConsulta = /^[a-zA-Z0-9\s.-_]+$/;
    var datos = [apellido, nombre, email, textarea];

    if (
      apellido &&
      nombre &&
      email &&
      textarea &&
      patron.test(apellido) &&
      patron.test(nombre) &&
      patronEmail.test(email) &&
      patronConsulta.test(textarea)
    ) {
      agregar(datos);
    } else {
      console.log("No paso");
    }
  } catch (err) {
    alert("¡Ha ocurrido un error!" + err.message);
  }
}

function agregar(d) {
  try { 
    if (contador === 0) {
      let cabeceraDatos = ["Apellido", "Nombre", "Email", "Mensaje"];
      let fila = document.createElement("tr");
      thead.appendChild(fila);
      for (let i = 0; i < cabeceraDatos.length; i++) {
        let cabecera = document.createElement("th");
        cabecera.textContent = cabeceraDatos[i];
        fila.appendChild(cabecera);
        contador++;
      }
    }
    console.log("Paso");
    console.log(d);

    let fila = document.createElement("tr");
    tbody.appendChild(fila);
    for (let i = 0; i < d.length; i++) {
      let columna = document.createElement("td");
      console.log(d[i]);
      columna.innerText = d[i];
      fila.appendChild(columna);
    }
    apellido.value = '';
    nombre.value = '';
    email.value = '';
    textarea.value = '';
  } catch (error) {}
}
