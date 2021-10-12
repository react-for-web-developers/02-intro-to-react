import { useState } from 'react';

function App() {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);


    const increase = player => {
    if (player === 'P1') {
      setScoreP1(scoreP1 + 1)
    } else {
      setScoreP2(scoreP2 + 1)
    }
  }

  const decrease = player => {
    if (player === 'P1') {
      if (scoreP1 > 0) setScoreP1(scoreP1 - 1)
    } else {
      if (scoreP2 > 0) setScoreP2(scoreP2 - 1)
    }
  }



  return (
    <div className="medium-container">

      <div className="flex-row">
        <div className="flex-large"><h2>Player 1: {scoreP1}</h2></div>
        <div className="flex-large"><h2>Player 2: {scoreP2}</h2></div>
      </div>
      <div className="flex-row">
        <div className="flex-large half">
          <button value="P1" onClick={e => increase(e.target.value)}>Increase Score</button>
          <span>  </span>
          <button className="accent-button" value="P1" onClick={e => decrease(e.target.value)}>Decrease Score</button>
        </div>
        <div className="flex-large half">
          <button value="P2" onClick={e => increase(e.target.value)}>Increase Score</button>
          <span>  </span>
          <button className="accent-button" value="P2" onClick={e => decrease(e.target.value)}>Decrease Score</button>
        </div>
      </div>
    </div>
  );
}

export default App;
