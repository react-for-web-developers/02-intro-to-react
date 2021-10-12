import "./App.css";
import {useState} from 'react';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const increase1 = () =>(
    setCount1(count1 + 1)
  )

  const increase2 = () =>(
    setCount2(count2 + 1)
  )

  const decrease1 = () =>(
    setCount1(count1 - 1)
  )

  const decrease2 = () =>(
    setCount2(count2 - 1)
  )

  return (
    <div>

    </div>

  );
}

export default App;
