import { useState } from 'react';

function App() {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [savedGames, setSavedGames] = useState([]);

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

  const saveGame = (scoreP1, scoreP2) => {
    if (scoreP1 === 0 && scoreP2 === 0) return

    let game = {
      game: "#" + (savedGames.length + 1),
      player1: scoreP1,
      player2: scoreP2
    }

    setSavedGames(savedGames => [...savedGames, game])
    setScoreP1(0)
    setScoreP2(0)
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
      <br /><br />
      <div className="small-container">
        <div className="flex-row">
          <div className="flex-large half">
            <button className="full-button" onClick={() => saveGame(scoreP1, scoreP2)}>Save Game</button>
          </div>
          <div className="flex-large half">
            <button className="full-button accent-button" onClick={() => setSavedGames([])}>Reset Game</button>
          </div>
        </div>
      </div>
      <div>
        <table className="striped-table">
          <thead>
            <tr>
              <th>Game</th>
              <th>Player 1</th>
              <th>Player 2</th>
            </tr>
          </thead>
          <tbody>
            {savedGames.map((score, index) => {
              return (
                <tr key={index}>
                  <td>{score.game}</td>
                  <td>{score.player1}</td>
                  <td>{score.player2}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
