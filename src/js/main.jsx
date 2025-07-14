import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

// Components
import Home from './components/Home';

const reactRender = ReactDOM.createRoot(document.getElementById('root'));

// Variables base
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

// Dirección: false = progresiva, true = regresiva
let isCountingDown = false;

// Control de pausa
let isPaused = false;

// Control de reinicio
let resetsCount = 0;

// Tiempo objetivo en segundos
let targetTimeInSeconds = parseInt(prompt('Ingresa cuando quieres la alerta:'), 10) || 10;

let alerted = false;

// Pausa
function pauseCounter() {
  isPaused = true;
}

// Reanudar
function resumeCounter() {
  isPaused = false;
}

// Reiniciar
function resetCounter() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;
  resetsCount = 0;
  isCountingDown = false;
  alerted = false; // Reinicia la alerta
}

setInterval(() => {
  if (isPaused) return;

  if (!isCountingDown) {
    // Progresiva
    seconds++;

    if (seconds === 10) {
      seconds = 0;
      resetsCount++; // Sumar reinicio

      if (resetsCount >= 5) {
        isCountingDown = true; // Cambiar a regresiva
      }

      minutes++;
    }

    if (minutes === 10) {
      minutes = 0;
      hours++;
    }

    if (hours === 10) {
      hours = 0;
      days++;
    }

  } else {
    // Regresiva
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 9;
      } else if (hours > 0) {
        hours--;
        minutes = 9;
        seconds = 9;
      } else if (days > 0) {
        days--;
        hours = 9;
        minutes = 9;
        seconds = 9;
      } else {
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
      }
    }
  }

  // Alerta alcanzado tiempo objetivo
  const totalCurrentSeconds = seconds + minutes * 10 + hours * 100 + days * 1000;

  if (!alerted && totalCurrentSeconds >= targetTimeInSeconds) {
    alert(`¡Has alcanzado tu tiempo objetivo de ${targetTimeInSeconds} segundos!`);
    alerted = true;
  }

  reactRender.render(
    <React.StrictMode>
      <Home 
        days={days} 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds} 
        isCountingDown={isCountingDown}
        pauseCounter={pauseCounter}
        resumeCounter={resumeCounter}
        resetCounter={resetCounter}
      />
    </React.StrictMode>
  );
}, 1000);
