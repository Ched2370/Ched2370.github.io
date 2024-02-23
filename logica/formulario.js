const btn = document.getElementById('btnFormulario');
btn.addEventListener('click', validar);

function validar() {
    try {
        const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s']+$/;
        const patronEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const patronConsulta = /^[a-zA-Z0-9\s.-_]+$/;
        const apellido = document.getElementById('apellido').value;
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const textarea = document.getElementById('textarea').value;
        
        if (apellido && nombre && email && textarea &&
            patron.test(apellido) && patron.test(nombre) &&
            patronEmail.test(email) && patronConsulta.test(textarea)) {
           console.log('Paso');
        } else {
            console.log('No paso');
        }
    } catch (err) {
        alert('¡Ha ocurrido un error!'  + err.message);
    }
}
