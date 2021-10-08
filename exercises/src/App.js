import './App.css';
import { useState } from 'react';
import useScoreState from './CustomHook/useScoreState.js';

function App() {
  const [scoreA, increaseA, decreaseA, resetA] = useScoreState(0);
  const [scoreB, increaseB, decreaseB, resetB] = useScoreState(0);
  const [scoreboard, setScoreboard] = useState([]);

  const addRecord = () => {
    setScoreboard((currentScore) => [`Player A ${scoreA} - Player B ${scoreB}`, ...currentScore]);
  };

  const resetRecords = () => {
    resetA();
    resetB();
    setScoreboard([]);
  };

  return (
    <div className='App'>
      <p>
        Player A <span>{scoreA}</span>
      </p>
      <button onClick={decreaseA} disabled={!scoreA}>
        Decrease Score
      </button>
      <button onClick={increaseA}>Increase Score</button>
      <p>
        Player B <span>{scoreB}</span>
      </p>
      <button onClick={decreaseB} disabled={!scoreB}>
        Decrease Score
      </button>
      <button onClick={increaseB}>Increase Score</button>
      <p>Scoreboard</p>
      <button onClick={resetRecords}>Reset</button>
      <button onClick={addRecord} disabled={!scoreA && !scoreB}>
        Save
      </button>
      <ul>
        {scoreboard.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
