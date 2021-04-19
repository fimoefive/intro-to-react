import React from 'react';
import { useState } from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';

// export default function Counter(appName, counterValue) {
export default function Counter() {
  const cohort = "E14";
  const [counter, setCounter] = useState(0);
  const [counterName, setCounterName] = useState("Counter");
  const [userInput, setUserInput] = useState();

  return (
    <>
      {/* <div className="App"> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {cohort === "E14" ? <h1>Welcome to React Cohort {cohort} !!</h1> : <h1>Day Cohort!</h1>}
        {/* <h2>COUNTER</h2> */}

        <h3>{counterName}</h3>

        <h3>{counter}</h3>

        <h4>Input Number</h4>
        <input onChange={(e) => setUserInput(Number(e.target.value))} placeholder="Enter Number"></input>

        <br />
        <h4>Counter Name:</h4>
        <input onChange={(e) => setCounterName(e.target.value)} placeholder="Enter Name"></input>


        {counter <= 0 ? '' :
          <button onClick={() => setCounter((prevState) => prevState + userInput)}>Increment by
          {userInput}
          </button>
        }

        {/*
          {counter <= 0 ? '' :
            <button onClick={() => setCounter((prevState) => prevState - userInput)}>Decrease by
          {userInput}
            </button>
          }
          */}

        <br></br>
        <button onClick={() => setCounter(0)}>Reset</button>
        <br></br>

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* </div> */}
    </>
  );
};
