const btn = document.getElementById("btnFormulario");
btn.addEventListener("click", validar);
const thead = document.getElementById("thead");
const tbody = document.getElementById("tbody");

var contador = 0;
function validar() {
  try {
    const eliminar = document.querySelectorAll('.advertencia');
      eliminar.forEach((eliminar) => {
        eliminar.remove();
      });

    const apellido = document.getElementById("apellido");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const textarea = document.getElementById("textarea");
    const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/;
    const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const patronConsulta = /^[a-zA-Z0-9.-_?\s]+$/;
    const datos = [apellido.value, nombre.value, email.value, textarea.value];
      console.log(datos);
      console.log(patron.test(apellido.value));
      console.log(patron.test(nombre.value));
      console.log(patronEmail.test(email.value));
      console.log(patronConsulta.test(textarea.value));

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
      agregar(datos);
      console.log('paso');
    } else {
      let padre = document.querySelectorAll(".lbl");
      if (!apellido.value || !patron.test(apellido.value)) {
        let ape = document.createElement("p");
        ape.className = "advertencia";
        ape.innerHTML = "agrege su apellido*";
        ape.style.color = "crimson";
        padre[0].appendChild(ape);
        apellido.insertAdjacentElement("afterend", ape);
      }
      if (!nombre.value || !patron.test(nombre.value)) {
        let nom = document.createElement("p");
        nom.className = "advertencia";
        nom.innerHTML = "agrege su nombre*";
        nom.style.color = "crimson";
        padre[1].appendChild(nom);
        nombre.insertAdjacentElement("afterend", nom);
      }
      if (!email.value || !patronEmail.test(email.value)) {
        let mail = document.createElement("p");
        mail.className = "advertencia";
        mail.innerHTML = "agrege su e-mail*";
        mail.style.color = "crimson";
        padre[2].appendChild(mail);
        email.insertAdjacentElement("afterend", mail);
      }
      if (!textarea.value || patronConsulta.test(textarea.value)) {
        let text = document.createElement("p");
        text.className = "advertencia";
        text.innerHTML = "agrege su consulta*";
        text.style.color = "crimson";
        padre[3].appendChild(text);
        textarea.insertAdjacentElement("afterend", text);
      }
      console.log("no paso");
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
    apellido.value = "";
    nombre.value = "";
    email.value = "";
    textarea.value = "";
  } catch (err) {
    alert('Ha surjido  un error');
  }
}
