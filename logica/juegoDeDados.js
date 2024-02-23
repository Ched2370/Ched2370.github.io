const btn = document.getElementById("tirar");
btn.addEventListener("click", tirarDados);

function tirarDados() {
  try {
    let vueltas = Math.floor(Math.random() * 30) + 15;
    const dado = document.getElementById("dado");
    console.log('cantidad de vueltas ' + vueltas);
    for (let i = 0; i < vueltas; i++) {
      const num = Math.floor(Math.random() * 6) + 1;
      setTimeout(() => {
        dado.src = "../imagenes/juego de dados/" + num + ".JPG";
      }, i * 100);
    }
  } catch (err) {
    swal("ERROR", "Ha surjido un error" + err.message, "error");
  }
}
