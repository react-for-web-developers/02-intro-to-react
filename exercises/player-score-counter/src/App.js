import './App.css';
import { useState } from 'react';

function App() {
  const [p1score, setP1score] = useState(0);
  
  const increaseP1Score = () => {
    setP1score(p1score + 1);
  }
  
  const decreaseP1Score = () => {
    setP1score(p1score - 1);
  }

  const [p2score, setP2score] = useState(0);
  
  const increaseP2Score = () => {
    setP2score(p2score + 1);
  }
  
  const decreaseP2Score = () => {
    setP2score(p2score - 1);
  }

  const [scores, setScores] = useState([])

  const saveScore = () => {
    setScores([...scores, {
      player1: p1score,
      player2: p2score
    }]);
  }

  return (
    <div>
      <h1>The Player Counter!</h1>

      <section className="players">
        <div className="player">
          <h3>Player 1</h3>
          <p className="icon">😼</p>
          <span>Score: {p1score}</span>
          <div>
            <button className="btn btn-left" onClick={increaseP1Score}>Increase Score</button>
            <button className="btn btn-right" onClick={decreaseP1Score}>Decrease Score</button>
          </div>
        </div>

        <div>
          <p>.VS</p>
        </div>

        <div className="player">
          <h3>Player 2</h3>
          <p className="icon">👻</p>
          <span>Score: {p2score}</span>
          <div>
            <button className="btn btn-left" onClick={increaseP2Score}>Increase Score</button>
            <button className="btn btn-right" onClick={decreaseP2Score}>Decrease Score</button>
          </div>
        </div>
      </section>

      <div className="score-btn">
        <button className="btn" onClick={saveScore}>Save Game</button>
      </div>

      {scores.map(score => (
        <section className="scores">
          <div className="score">
            <span>Player 1 😼: </span>
            <span>{score.player1}</span>
          </div>
          
          <div className="score">
            <span>Player 2 👻: </span>
            <span>{score.player2}</span>
          </div>
        </section>
      ))}
  
    </div>
  );
}

export default App;
