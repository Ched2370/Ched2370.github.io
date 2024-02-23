const AC = document.getElementById("AC");
AC.addEventListener("click", escribirAC);
const igual = document.getElementById("igual");
igual.addEventListener("click", calcularValores);

const display = document.getElementById("display");

const cero = document.getElementById("cero");
cero.addEventListener("click", escribirCero);
const uno = document.getElementById("uno");
uno.addEventListener("click", escribirUno);
const dos = document.getElementById("dos");
dos.addEventListener("click", escribirDos);
const tres = document.getElementById("tres");
tres.addEventListener("click", escribirTres);
const cuatro = document.getElementById("cuatro");
cuatro.addEventListener("click", escribirCuatro);
const cinco = document.getElementById("cinco");
cinco.addEventListener("click", escribirCinco);
const seis = document.getElementById("seis");
seis.addEventListener("click", escribirSeis);
const siete = document.getElementById("siete");
siete.addEventListener("click", escribirSiete);
const ocho = document.getElementById("ocho");
ocho.addEventListener("click", escribirOcho);
const nueve = document.getElementById("nueve");
nueve.addEventListener("click", escribirNueve);
const punto = document.getElementById("punto");
punto.addEventListener("click", escribirPunto);
const dividir = document.getElementById("dividir");
dividir.addEventListener("click", escribirDividir);
const multiplicar = document.getElementById("multiplicar");
multiplicar.addEventListener("click", escribirMultiplicar);
const restar = document.getElementById("restar");
restar.addEventListener("click", escribirRestar);
const sumar = document.getElementById("sumar");
sumar.addEventListener("click", escribirSumar);

patron = /^\d+(\.\d+)?(\s*[-+*/]\s*\d+(\.\d+)?)*$/;
var num = "";
var resultado = 0;

/* PARTE PARA ECRIBIR */
function escribirCero() {
  try {
      display.textContent += "0";
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirUno() {
  try {
    display.textContent += "1";
    console.log("1");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirDos() {
  try {
    display.textContent += "2";
    console.log("2");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirTres() {
  try {
    display.textContent += "3";
    console.log("3");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirCuatro() {
  try {
    display.textContent += "4";
    console.log("4");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirCinco() {
  try {
    display.textContent += "5";
    console.log("5");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirSeis() {
  try {
    display.textContent += "6";
    console.log("6");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirSiete() {
  try {
    display.textContent += "7";
    console.log("7");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirOcho() {
  try {
    display.textContent += "8";
    console.log("8");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirNueve() {
  try {
    display.textContent += "9";
    console.log("9");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirPunto() {
  try {
    display.textContent += ".";
    console.log(".");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirDividir() {
  try {
    display.textContent += "/";
    console.log(" / ");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirMultiplicar() {
  try {
    display.textContent += "*";
    console.log("*");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirRestar() {
  try {
    display.textContent += "-";
    console.log("-");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirSumar() {
  try {
    display.textContent += "+";
    console.log("+");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

function escribirAC() {
  try {
    display.textContent = "";
    console.log("");
  } catch (err) {
    swal("ERROR", "ha surjido un error " + err.message, "error");
  }
}

/* ARITMETICA */
function calcularValores() {
  try {
    num = display;
    resultado = eval(num.textContent);
    console.log(eval(resultado));
    display.textContent = resultado;
  } catch (err) {
    swal("ERROR", "Ha surjido un error " + err.message, "error");
  }
}
