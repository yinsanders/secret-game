let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemeto, texto) {
    let titulo = document.querySelector(elemeto);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `You got the number right in ${intentos} ${(intentos === 1) ? 'time' : 'times'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'The secret number is less');
        } else {
            asignarTextoElemento('p', 'The secret number is higher');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // console.log(numeroGenerado);
    // console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los número.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'All possible numbers have already been drawn');
    } else {
        // Si el numero generado está incluido en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Secret Number Game');
    asignarTextoElemento('p', `Type a number from 1 to ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja.
    limpiarCaja();
    /** Indicar mensaje de intervalo de números.
    Generar el número aleatorio.
    Inicializar el número de intentos. */ 
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();