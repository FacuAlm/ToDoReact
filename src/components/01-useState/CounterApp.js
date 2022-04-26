import React, { useState } from "react";

export const CounterApp = () => {
  const [Counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  const {counter1, counter2}=Counter

  const Aumentar = () => {
    setCounter({
        ...Counter,
        counter1:counter1+10
    });
  };
  return (
    <>
      <h1>Contador 1: {counter1}</h1>
      <h1>Contador 2: {counter2}</h1>
      <hr />
      <button onClick={Aumentar} className="btn btn-success">
        Aumentar
      </button>
    </>
  );
};
