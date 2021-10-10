import "./App.css";

import { useState } from "react";

function App() {
  // * Handlers for History Log
  const [savedState, setSavedState] = useState([]);

  const savePoints = () => {
    // const obj = {};
    // obj.player1 = countPlayer1;
    // obj.player2 = countPlayer2;

    setSavedState([
      ...savedState,
      {
        player1: countPlayer1,
        player2: countPlayer2,
      },
    ]);
    console.log(savedState);
  };

  // * Handlers for Player 1
  const [countPlayer1, setcountPlayer1] = useState(0);

  const increasePlayer1 = () => {
    setcountPlayer1(countPlayer1 + 1);
  };

  const decreasePlayer1 = () => {
    if (countPlayer1 > 0) setcountPlayer1(countPlayer1 - 1);
  };

  // * Handlers for Player 2
  const [countPlayer2, setcountPlayer2] = useState(0);

  const increasePlayer2 = () => {
    setcountPlayer2(countPlayer2 + 1);
  };

  const decreasePlayer2 = () => {
    if (countPlayer2 > 0) setcountPlayer2(countPlayer2 - 1);
  };

  //* Render Function
  return (
    <div className="App">
      <div className="container">
        <div className="player-info">
          <span className="player-label">Player 1</span>
          <div className="player-count">{countPlayer1}</div>
          <button onClick={increasePlayer1} className="button player-increase">
            Increase
          </button>
          <button onClick={decreasePlayer1} className="button player-decrease">
            Decrease
          </button>
        </div>
        <div className="player-info">
          <span className="player-label">Player 2</span>
          <div className="player-count">{countPlayer2}</div>
          <button onClick={increasePlayer2} className="button player-increase">
            Increase
          </button>
          <button onClick={decreasePlayer2} className="button player-decrease">
            Decrease
          </button>
        </div>
      </div>
      <button className="button save-btn" onClick={savePoints}>
        Save Scores
      </button>
      {savedState.map((item) => (
        <div className="scores-container">
          <section className="saved-score-container">
            <div>
              <label className="saved-score-label">Player 1:</label>
              <label className="saved-score-number">{item.player1}</label>
            </div>
            <div>
              <label className="saved-score-label">Player 2:</label>
              <label className="saved-score-number">{item.player2}</label>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default App;
