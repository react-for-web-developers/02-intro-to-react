import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);

  const increaseP1Score = () => {
    setP1score(p1score + 1);
  }
  
  const decreaseP1Score = () => {
    setP1score(p1score - 1);
  }
  
  const increaseP2Score = () => {
    setP2score(p2score + 1);
  }
  
  const decreaseP2Score = () => {
    setP2score(p2score - 1);
  }

  return (
    <div>
      <h1>The Player Counter!</h1>

      <section>
        <div className="player">
          <h3>Player 1</h3>
          <span>Score: {p1score}</span>
          <div className="btns">
            <button onClick={increaseP1Score}>Increase Score</button>
            <button onClick={decreaseP1Score}>Decrease Score</button>
          </div>
        </div>

        <div className="player">
          <h3>Player 2</h3>
          <span>Score: {p2score}</span>
          <div className="btns">
            <button onClick={increaseP2Score}>Increase Score</button>
            <button onClick={decreaseP2Score}>Decrease Score</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
