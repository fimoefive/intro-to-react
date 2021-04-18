
import './App.css';
import Counter from './Counter';

function App() {

  return (
    <>
      <Counter />
      <Counter appName="counter 1" initialValue={200} />
      <Counter appName="counter 2" initialValue={200} />
      <Counter appName="counter 3" initialValue={200} />
    </>
  );
};

export default App;
