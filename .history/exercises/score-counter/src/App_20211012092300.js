import "./App.css";
import {useState} from 'react';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [results, setResults] = useState(0);

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

  const saveGame = () => {
    
    //setResults(`${count1} ${count2}`)
    setResults(count1)

    setCount1(0);
    setCount2(0);
    console.log(results)
  }

  return (
    <div>
      <table>
        <tbody>

        </tbody>
        
      </table>
      <button onClick={saveGame}>Save game</button>
    </div>
  );
}

export default App;
