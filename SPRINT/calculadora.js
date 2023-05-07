$(document).ready(function() {

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnPunto = document.getElementById("btnPunto");
const btnSuma = document.getElementById("btnSuma");
const btnResta = document.getElementById("btnResta");
const btnMultiplicacion = document.getElementById("btnMultiplicacion");
const btnDivision = document.getElementById("btnDivision");
const btnPorcentaje = document.getElementById("btnPorcentaje");
const btnIgual = document.getElementById("btnIgual");
const btnClear = document.getElementById("btnClear");
const btnBackspace = document.getElementById("btnBackspace");

const pantalla = document.getElementById("resultado");

let primerNumero = "";
let segundoNumero = "";
let operacion = "";

function agregarNumero(numero) {
  pantalla.value += numero;
}

function seleccionarOperacion(op) {
  
  primerNumero = pantalla.value;
  pantalla.value = "";
  operacion = op;
}

function calcularResultado() {
  segundoNumero = pantalla.value;
  switch (operacion) {
    case "+":
      pantalla.value = parseFloat(primerNumero) + parseFloat(segundoNumero);
      break;
    case "-":
      pantalla.value = parseFloat(primerNumero) - parseFloat(segundoNumero);
      break;
    case "×":
      pantalla.value = parseFloat(primerNumero) * parseFloat(segundoNumero);
      break
      ;
      case "÷":
      pantalla.value = parseFloat(primerNumero) / parseFloat(segundoNumero);
      break;
      case "%":
      pantalla.value = (parseFloat(primerNumero) * parseFloat(segundoNumero)) / 100;
      break;
      default:
      break;
      }
      primerNumero = "";
      segundoNumero = "";
      operacion = "";
      }
      
      function limpiarPantalla() {
      pantalla.value = "";
      primerNumero = "";
      segundoNumero = "";
      operacion = "";
      }
      
      function borrarCaracter() {
      pantalla.value = pantalla.value.slice(0, -1);
      }
      
      btn0.addEventListener("click", () => agregarNumero("0"));
      btn1.addEventListener("click", () => agregarNumero("1"));
      btn2.addEventListener("click", () => agregarNumero("2"));
      btn3.addEventListener("click", () => agregarNumero("3"));
      btn4.addEventListener("click", () => agregarNumero("4"));
      btn5.addEventListener("click", () => agregarNumero("5"));
      btn6.addEventListener("click", () => agregarNumero("6"));
      btn7.addEventListener("click", () => agregarNumero("7"));
      btn8.addEventListener("click", () => agregarNumero("8"));
      btn9.addEventListener("click", () => agregarNumero("9"));
      btnPunto.addEventListener("click", () => {
      if (!pantalla.value.includes(".")) {
      agregarNumero(".");
      }
      });
      btnSuma.addEventListener("click", () => seleccionarOperacion("+"));
      btnResta.addEventListener("click", () => seleccionarOperacion("-"));
      btnMultiplicacion.addEventListener("click", () => seleccionarOperacion("×"));
      btnDivision.addEventListener("click", () => seleccionarOperacion("÷"));
      btnPorcentaje.addEventListener("click", () => seleccionarOperacion("%"));
      btnIgual.addEventListener("click", calcularResultado);
      btnClear.addEventListener("click", limpiarPantalla);
      btnBackspace.addEventListener("click", borrarCaracter);

});
