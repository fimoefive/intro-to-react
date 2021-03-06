import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {

  const arrayC = [
    {
      appName: "Counter 1",
      counterValue: 200
    },
    {
      appName: "Counter 2",
      counterValue: 100
    },
    {
      appName: "Count Dracula",
      counterValue: 0
    }
  ];

  return (
    <>
      <div>
        {/*// Set variables for Counter Function for deconstructed arguments/values
        <Counter appName="counter 1" counterValue={200} />
        <Counter appName="counter 2" counterValue={100} />
        <Counter appName="counter 3" counterValue={250} /> */}
        {
          arrayC.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
        }
        <a
          className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer"
        > Learn React
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
//        <Counter/>
//       </div>
//     )
//   }
// };

export default App;
