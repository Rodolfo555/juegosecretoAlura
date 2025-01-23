let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "Numero es menor");
    } else {
      asignarTextoElemento("p", "Numero es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function limpiarCaja() {
  let valorCaja = (document.querySelector("#valorUsuario").value = "");
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumeroSorteados);
  //si ya sorteamos todos los numeros.
  if (listaNumeroSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos lo numero posibles");
  } else {
    if (listaNumeroSorteados.includes(numeroGenerado)) {
      //si el numero generado esta en la lista.

      return generarNumeroSecreto();
    } else {
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function reiniciarJuego() {
  //Reinicio de juego a 0.
  limpiarCaja();
  //indicar mensaje de intevalo de numeros.
  //dehabilitar el boton de nuevo juego.
  condicionesIniciales();
  //reiniciar juego.
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
