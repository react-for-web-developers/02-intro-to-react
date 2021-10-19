import './App.css';
import { useState } from 'react';

function App() {
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);
  const [scores, setScores] = useState([])
  
  const increaseP1Score = () => setP1score(p1score + 1);
  
  const decreaseP1Score = () => {
    if (p1score > 0) {
      setP1score(p1score - 1);
    }
  }
  
  const increaseP2Score = () => {
    setP2score(p2score + 1);
  }
  
  const decreaseP2Score = () => {
    if (p2score > 0) {
      setP2score(p2score - 1);
    }
  }

  const saveScore = () => {
    setScores([...scores, {
      p1score,
      p2score
    }]);
    setP1score(0);
    setP2score(0);
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
            <button className="btn btn-left" onClick={increaseP1Score}>Increase</button>
            <button className="btn btn-right" onClick={decreaseP1Score}>Decrease</button>
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
            <button className="btn btn-left" onClick={increaseP2Score}>Increase</button>
            <button className="btn btn-right" onClick={decreaseP2Score}>Decrease</button>
          </div>
        </div>
      </section>

      <div className="score-btn">
        <button className="btn" onClick={saveScore}>Save Game</button>
      </div>

      {scores.map(({p1score, p2score}) => (
        <section className="scores">
          <div className="score">
            <span>Player 1 😼: {p1score}</span>
          </div>
          
          <div className="score">
            <span>Player 2 👻: {p2score}</span>
          </div>
        </section>
      ))}
  
    </div>
  );
}

export default App;
