import React from 'react';

const Home = ({
  days,
  hours,
  minutes,
  seconds,
  isCountingDown,
  pauseCounter,
  resumeCounter,
  resetCounter
}) => {
  return (
    <div className="text-center">
		<h1>{isCountingDown ? 'Cuenta Regresiva' : 'Cuenta Progresiva'}</h1>
      <div className="counter">
        <div className="clockIcon">
          <i className="fa-solid fa-clock"></i>
        </div>
        <div className="days">{days} </div>
        <div className="hour">{hours} </div>
        <div className="min">{minutes} </div>
        <div className="sec">{seconds} </div>
      </div>

      

      <div className="mt-3">
        <button className=" mx-5" onClick={pauseCounter}>Pausar</button>
        <button className=" mx-5" onClick={resumeCounter}>Reanudar</button>
        <button className=" mx-5" onClick={resetCounter}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Home;
