'use strict';

var playerName = '';
var secuencia = [];
var usuarioSecuencia = [];
var score = 0;
var enJuego = false;
var puedeJugar = false;

var btnComenzar = document.getElementById('btnComenzar');
var playerNameInput = document.getElementById('playerName');
var inicioSection = document.getElementById('inicio');
var juegoSection = document.getElementById('juego');
var scoreDisplay = document.getElementById('score');
var modal = document.getElementById('modal');
var btnReiniciar = document.getElementById('btnReiniciar');
var botones = document.querySelectorAll('.boton');
var mensajeEstado = document.getElementById('mensaje-estado');
var mensajeErrorNombre = document.getElementById('error-nombre');

function actualizarScore() {
    scoreDisplay.textContent = score;
}

function actualizarMensaje (texto, esExito = false) {
    mensajeEstado.innerText = texto;
    mensajeEstado.style.color = esExito ? "green" : "black";
}

function resaltarColor(color) {
    var boton = document.getElementById(color);
    boton.classList.add('activo');
    setTimeout(function() {
        boton.classList.remove('activo');
    }, 400);
}

function mostrarModal() {
    modal.classList.remove('oculto');
}

function ocultarModal() {
    modal.classList.add('oculto');
}

function reproducirSecuencia() {
    puedeJugar = false;
    actualizarMensaje("Observa la secuencia...");
    
    var i = 0;
    var interval = setInterval(function() {
        resaltarColor(secuencia[i]);
        i++;
        if (i >= secuencia.length) {
            clearInterval(interval);
            setTimeout(function() {
                puedeJugar = true;
                actualizarMensaje("¡Tu turno!");
        }, 500);
    }, 800);
}

function agregarColorSecuencia() {
    var colores = ['rojo', 'verde', 'azul', 'amarillo'];
    var random = Math.floor(Math.random() * colores.length);
    secuencia.push(colores[random]);
    reproducirSecuencia();
}

function verificarSecuencia() {
    var i;
    for (i = 0; i < usuarioSecuencia.length; i++) {
        if (usuarioSecuencia[i] !== secuencia[i]) {
            enJuego = false;
            mostrarModal();
            return;
        }
    }
    if (usuarioSecuencia.length === secuencia.length) {
        puedeJugar = false;
        score++;
        actualizarScore();
        usuarioSecuencia = [];
        actualizarMensaje("¡Bien, adivinaste!", true);
        setTimeout(function() {
            agregarColorSecuencia();
        }, 1200);
    }
}

function manejarClickBoton() {
    if (!enJuego || !puedeJugar ) {
        return;
    }
    usuarioSecuencia.push(this.id);
    resaltarColor(this.id);
    verificarSecuencia();
}

function iniciarJuego() {
    var nombre = playerNameInput.value.trim();
    var mensajeError = document.getElementById('mensaje-error');
    if (nombre.length < 3) {
    mensajeError.innerText = 'El nombre debe tener al menos 3 letras';
    mensajeError.style.display = 'block';
        return;
    }
    
    playerName = nombre;

    inicioSection.classList.add('oculto');
    juegoSection.classList.remove('oculto');
    juegoSection.classList.add('mostrar');
    score = 0;
    secuencia = [];
    usuarioSecuencia = [];
    enJuego = true;
    
    actualizarScore();
    agregarColorSecuencia();
}

btnComenzar.addEventListener('click', iniciarJuego);
btnReiniciar.addEventListener('click', function() {
    ocultarModal();
    iniciarJuego();
});

var j;
for (j = 0; j < botones.length; j++) {
    botones[j].addEventListener('click', manejarClickBoton);
}
