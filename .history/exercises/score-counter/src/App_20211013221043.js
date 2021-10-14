import "./App.css";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [results, setResults] = useState([]);

  const increase1 = () => setCount1(count1 + 1);

  const increase2 = () => setCount2(count2 + 1);

  const decrease1 = () => setCount1(count1 - 1);

  const decrease2 = () => setCount2(count2 - 1);

  const saveGame = () => {
    setResults([
      ...results,
      {
        count1,
        count2,
      },
    ]);
    //setResults(count1)

    setCount1(0);
    setCount2(0);
    console.log(results);
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
          </tr>
          <tr>
            <td>{count1}</td>
            <td>{count2}</td>
          </tr>
          <tr>
            <td>
              <button onClick={increase1}>Increase</button>
            </td>
            <td>
              <button onClick={increase2}>Increase</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={decrease1}>Decrease</button>
            </td>
            <td>
              <button onClick={decrease2}>Decrease</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={saveGame}>Save game</button>
      <div>
        {results.map(())}
      </div>
    </div>
  );
}

export default App;
