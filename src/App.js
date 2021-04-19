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
  //   },
  //   {
  //     appName: "Counter 4",
  //     counterValue: 250
  //   }
  // ];

  // {
  //   arrayC.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue} />)
  // }

  return (
    <>
      <Counter />

      {/* <Counter appName="counter 1" initialValue={200} />
      <Counter appName="counter 2" initialValue={200} />
      <Counter appName="counter 3" initialValue={200} /> */}

    </>
  );
};

// export default class App extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// };

export default App;
