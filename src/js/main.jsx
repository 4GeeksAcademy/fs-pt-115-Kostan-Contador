import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const reactRender = ReactDOM.createRoot(document.getElementById('root'))

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

setInterval(() => {
  seconds++;

  if (seconds === 10) {
    seconds = 0;
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

  reactRender.render(
    <React.StrictMode>
      <Home 
        days={days} 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds} 
      />
    </React.StrictMode>
  );
}, 1000);
