const ham = document.getElementById('ham');
const listaM = document.querySelector('.lista-menu');
const principal = document.querySelector('.seccion-principal');
const footer2 = document.querySelector('.footer');

ham.addEventListener('click', () => {
    try {
        
        console.log('paso');
        if (listaM.classList.contains('activo')) {
            listaM.classList.remove('activo');
        } else {
            listaM.classList.add('activo'); 
        }
        if (principal.style.backdropFilter === 'none') {
            principal.style.backdropFilter = 'blur(10px)';
        } else {
            principal.style.backdropFilter = 'none';
        }
        if (footer2.style.position === 'static') {
            footer2.style.position = 'fixed';
        } else {
            footer2.style.position = 'static';}
        } catch (err) {
            alert("Error " + err.message);
        }

});