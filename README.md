# 🎮 Simon Says – Introducción a la Programación Web

Este proyecto es una versión web del clásico juego **Simon Says**, desarrollado como **Trabajo Práctico Final Integrador** para la materia **Introducción a la Programación Web (LGTI 2025)**.

El objetivo del trabajo es aplicar los conceptos vistos en la materia utilizando **HTML, CSS y JavaScript**, respetando buenas prácticas de programación y el uso de **Git/GitHub**.

🔗 **Jugar al Simon Says:**  
👉 https://chiarabertino.github.io/SimonSays/

---

## 🕹️ Funcionalidades principales

### Mecánica del juego
- **Ingreso de jugador:** el usuario debe ingresar su nombre antes de comenzar la partida (mínimo 3 caracteres).
- **Secuencia dinámica:** el juego genera una secuencia aleatoria de colores que se reproduce visualmente.
- **Interacción del jugador:** el usuario debe repetir la secuencia presionando los botones de colores correspondientes.
- **Sistema de puntaje:** cada botón presionado correctamente suma puntos, los cuales se muestran en pantalla.
- **Detección de error:** si el jugador se equivoca en la secuencia, la partida finaliza.
- **Modal de derrota:** al perder, se muestra un modal informando el resultado y un botón para reiniciar el juego.

---

## ⚙️ Características técnicas
- Diseño responsivo maquetado íntegramente con **Flexbox**.
- Implementación de modales mediante manipulación del DOM.
- Página de contacto con formulario validado.
- Envío del formulario utilizando `mailto`, abriendo el cliente de correo del sistema.
- Separación clara entre estructura (HTML), estilos (CSS) y lógica (JavaScript).

---

## 🛠️ Tecnologías utilizadas

### HTML
- Estructura semántica.
- Separación del contenido y la lógica.

### CSS
- Maquetación con Flexbox.
- Estilos organizados por archivo.
- Uso consistente de colores y unidades de medida.

### JavaScript
- Cumplimiento estricto del estándar **ES5**.
- Uso de modo estricto (`'use strict'`).
- Manejo de eventos mediante `addEventListener`.
- Código ordenado y legible según las normas de la cátedra.

---

## 📂 Estructura del proyecto

/
├── index.html # Página principal del juego
├── contacto.html # Página del formulario de contacto
├── README.md # Documentación del proyecto
│
├── /Scripts
│ ├── script.js # Lógica principal del juego
│ └── contacto.js # Validaciones y envío del formulario
│
├── /Styles
│ ├── style.css # Estilos generales del juego
│ └── style-contacto.css # Estilos de la página de contacto

---
##  Alumno
* **Nombre:** [Helbert Aylen - Bertino Chiara]
* **Sede:** [UAI Rosario]
* **Materia:** Introducción a la Programación Web
---

## 🔗 Repositorio
👉 https://github.com/ChiaraBertino/SimonSays