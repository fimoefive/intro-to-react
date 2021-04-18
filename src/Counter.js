import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';

export default function Counter(appName, counterValue) {
  const cohort = 14;
  const [counter, setCounter] = useState(counterValue);
  const [counterName, setCounterName] = useState(appName);
  const [userInput, setUserInput] = useState(counterValue);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React Cohort {cohort} !!</h1>
          <h3>Counter</h3>
          <input onChange={(e) => setCounterName(e.target.value)}></input>
          {counterName}
          {counter <= 0 ? '' :
            <button onClick={() => setCounter((prevState) => prevState + userInput)}>Increment by {userInput}
            </button>
          }

          <input onChange={(e) => setUserInput(Number(e.target.value))}></input> <br />
          <button onClick={() => setCounter((prevState) => prevState - 1)}>Decrease by 1</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </>
  );
}
