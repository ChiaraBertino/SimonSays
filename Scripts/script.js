'use strict';

var playerName = '';
var secuencia = [];
var usuarioSecuencia = [];
var score = 0;
var enJuego = false;

var btnComenzar = document.getElementById('btnComenzar');
var playerNameInput = document.getElementById('playerName');
var inicioSection = document.getElementById('inicio');
var juegoSection = document.getElementById('juego');
var scoreDisplay = document.getElementById('score');
var modal = document.getElementById('modal');
var btnReiniciar = document.getElementById('btnReiniciar');
var botones = document.querySelectorAll('.boton');

function resaltarColor(color) {
    var boton = document.getElementById(color);
    boton.classList.add('activo')
    setTimeout (function() {
        boton.classList.remove('activo');
     }, 400);
} 

function mostrarModal() {
    modal.classList.remove('oculto');
}

function ocultarModal() {
    modal.classList.add('oculto');
}

function reproducirSecuencia () {
    var i = 0;
    var interval = setInterval(function() {
        resaltarColor(secuencia[i]);
        i++;
        if (i >= secuencia.length) {
            clearInterval(interval);
        }
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
        score++;
        actualizarScore();
        usuarioSecuencia = [];
        agregarColorSecuencia();
    }
}
function manejarClickBoton() {
    if (!enJuego) {
        return;
    }
    usuarioSecuencia.push(this.id);
    resaltarColor(this.id);
    verificarSecuencia();
}

function iniciarJuego() {
    var nombre = playerNameInput.value.trim();
    if (nombre.length < 3) { 
        alert('El nombre debe tener al menos 3 letras');
        return;

    playerName = nombre;
    inicioSection.classList.add('oculto');
    juegoSection.classList.remove('oculto');
    score = 0;
    secuencia = [];
    usuarioSecuencia = [];
    enJuego = true;
    actualizarScore();
    agregarColorSecuencia();
}

function reiniciarJuego() {
    ocultarModal();
    iniciarJuego();
}

btnComenzar.addEvenListener('click', iniciarJuego);
btnReiniciar.addEventListener('click', reiniciarJuego);  

var j;
for (j = 0; j < botones.length; j++) {
    botones[j].addEventListener('click', manejarClickBoton);
}    
