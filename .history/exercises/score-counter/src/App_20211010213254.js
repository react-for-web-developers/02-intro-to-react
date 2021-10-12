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

  const saveGame = ()

  return (
    <div>
      <table>
        <tr>
          <th>Player 1</th>
          <th>Player 2</th>
        </tr>
        <tr>
          <td>{count1}</td>
          <td>{count2}</td>
        </tr>
        <tr>
          <td><button onClick={increase1}>Increase</button></td>
          <td><button onClick={increase2}>Increase</button></td>
        </tr>
        <tr>
          <td><button onClick={decrease1}>Decrease</button></td>
          <td><button onClick={decrease2}>Decrease</button></td>
        </tr>
      </table>
      <button onClick={saveGame}>Save game</button>
    </div>
  );
}

export default App;
