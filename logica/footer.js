/* llamamos al footer x su clase, xq desde aca se cargara a todas las paginas
y si el profe pregunta xq use su clase y no un id, xq es uma mala practica repetir el id xD */
const footer = document.getElementsByClassName('footer');
/* creamos un arreglo para cargar los nombres*/
const integrantes = ['Jhonatan Rémon', 'Mario Martin Ibañez', 'Rocío Ledesma'];
/* creamos un foreach para cargarlos nombres */
integrantes.forEach( colaborador => {
    const parrafo = document.createElement('p');
    parrafo.className = 'pfooter';
    parrafo.innerText = colaborador;
    footer[0].appendChild(parrafo);
});
