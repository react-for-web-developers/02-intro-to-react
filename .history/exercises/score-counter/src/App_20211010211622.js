import "./App.css";
import {useState} from 'react';

function App() {

  const [count1, setCount1] = useState(0);
  const count2 = 0;

  const increase1 = () =>(
    setCount1(count1 + 1)
  )

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
          <td><buttononClick={increase1}>Increase</button></td>
        </tr>
        <tr>
          <td><button>Decrease</button></td>
          <td><button>Decrease</button></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
