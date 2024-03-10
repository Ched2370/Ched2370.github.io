/* llamamos las teclas y le creamos un evenlistener a cada una */
const display = document.getElementById("display");
/* se realizaron funciones anonimas para cada tecla */
const AC = document.getElementById("AC");
AC.addEventListener("click", () => {
  try {
    display.textContent = "";
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const igual = document.getElementById("igual");
igual.addEventListener("click", () => {
  try {

    if (display.textContent == "") {

      alert("No ingresaste una expresión");

    } else {
      display.textContent = eval(display.textContent);
    }

  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const cero = document.getElementById("cero");
cero.addEventListener("click", () => {
  try {
    display.textContent += "0";
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const uno = document.getElementById("uno");
uno.addEventListener("click", () => {
  try {
    display.textContent += "1";
    console.log("1");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const dos = document.getElementById("dos");
dos.addEventListener("click", () => {
  try {
    display.textContent += "2";
    console.log("2");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const tres = document.getElementById("tres");
tres.addEventListener("click", () => {
  try {
    display.textContent += "3";
    console.log("3");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const cuatro = document.getElementById("cuatro");
cuatro.addEventListener("click", () => {
  try {
    display.textContent += "4";
    console.log("4");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const cinco = document.getElementById("cinco");
cinco.addEventListener("click", () => {
  try {
    display.textContent += "5";
    console.log("5");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const seis = document.getElementById("seis");
seis.addEventListener("click", () => {
  try {
    display.textContent += "6";
    console.log("6");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const siete = document.getElementById("siete");
siete.addEventListener("click", () => {
  try {
    display.textContent += "7";
    console.log("7");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const ocho = document.getElementById("ocho");
ocho.addEventListener("click", () => {
  try {
    display.textContent += "8";
    console.log("8");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const nueve = document.getElementById("nueve");
nueve.addEventListener("click", () => {
  try {
    display.textContent += "9";
    console.log("9");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const punto = document.getElementById("punto");
punto.addEventListener("click", () => {
  try {
    display.textContent += ".";
    console.log(".");
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const dividir = document.getElementById("dividir");
dividir.addEventListener("click", () => {
  try {
    if (display.textContent == "") {
      display.textContent += "0/";
    } else {
      display.textContent += "/";
      console.log(" / ");
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const multiplicar = document.getElementById("multiplicar");
multiplicar.addEventListener("click", () => {
  try {
    if (display.textContent == "") {
      display.textContent += "0*"
    } else {
      display.textContent += "*";
      console.log("*");
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const restar = document.getElementById("restar");
restar.addEventListener("click", () => {
  try {
    if (display.textContent == "") {
      display.textContent = "0-"
    } else {
      display.textContent += "-";
      console.log("-");
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

const sumar = document.getElementById("sumar");
sumar.addEventListener("click", () => {
  try {
    if(display.textContent== ""){
      display.textContent="0+"
    }else{
    display.textContent += "+";
    console.log("+");
    }
  } catch (err) {
    alert("Ha surjido un error " + err.message);
  }
});

