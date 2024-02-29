const ham = document.getElementById('ham');
const listaM = document.querySelector('.lista-menu');
const cajas = document.querySelectorAll('.caja');
const footer2 = document.querySelector('.footer');

ham.addEventListener('click', () => {
    try {
        
        console.log('paso');
        if (listaM.classList.contains('activo')) {
            listaM.classList.remove('activo');
        } else {
            listaM.classList.add('activo'); 
        }
        if (footer2.style.position === 'static') {
            footer2.style.position = 'fixed';
        } else {
            footer2.style.position = 'static';}
        } catch (err) {
            alert("Error " + err.message);
        }

});