/* llamamos al boton */
const btn = document.getElementById("tirar");
/* le agregamos un evenlistener para llamar la funcion tirarDados */
btn.addEventListener("click", tirarDados);
/* creamos la funcion dados */
function tirarDados() {
  try {
    /* creo una variable que me devuelva numeros aleatorios entre el 15 y el 45
    estos seran los numeros de vueltas del dado al lanzarlo */
    let vueltas = Math.floor(Math.random() * 30) + 15;
    const dado1 = document.getElementById("dado1");
    const dado2 = document.getElementById("dado2");
    const dado3 = document.getElementById("dado3");
    /* console.log('cantidad de vueltas ' + vueltas); */
    /* un for para iterar los valores de los dados */
    for (let i = 0; i < vueltas; i++) {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const d3 = Math.floor(Math.random() * 6) + 1;
      /* un setTime para ir mostrando  los valores aleatorios */
      setTimeout(() => {
        dado1.src = "../imagenes/juego de dados/" + d1 + ".JPG";
        dado2.src = "../imagenes/juego de dados/" + d2 + ".JPG";
        dado3.src = "../imagenes/juego de dados/" + d3 + ".JPG";
      }, i * 200); /* se le multiplica por i para crear un efecto para que los dados se muevan mas lento */
    }
  } catch (err) {
    swal("ERROR", "Ha surjido un error" + err.message, "error");
  }
}
