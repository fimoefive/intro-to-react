import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  // const arrayC = [
  //   {
  //     appName: "Counter 1",
  //     counterValue: 200
  //   },
  //   {
  //     appName: "Counter 2",
  //     counterValue: 100
  //   },
  //   {
  //     appName: "Counter 3",
  //     counterValue: 200
  //   }
  // ];


  return (
    <>
      <div>
        <Counter />
        <Counter />
        <Counter />

        {/* <Counter appName="counter 1" initialValue={200} />
      <Counter appName="counter 2" initialValue={200} />
      <Counter appName="counter 3" initialValue={200} /> */}

        {/* 
    // {
      // arrayC.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
    // }
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p> 
        */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </>
  );
};

// Different way as a Component
// export default class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// };

export default App;
