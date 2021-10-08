import { useState } from 'react';
import './App.css';

function App() {

  const [playerOnePoints, setPlayerOnePoints ] = useState(0);
  const [playerTwoPoints, setPlayerTwoPoints ] = useState(0);
  const [pastPoints, setPastPoints] = useState([0,0]);


  const increase = player => {
    if(player === 1) {
      setPlayerOnePoints(playerOnePoints + 1);
    } 
    
    if(player === 2) {
      setPlayerTwoPoints(playerTwoPoints + 1);
    }
  }

  const decrease = player => {
    if(player === 1 && playerOnePoints > 0) {
      setPlayerOnePoints(playerOnePoints - 1);
    } 
    
    if(player === 2 && playerTwoPoints > 0) {
      setPlayerTwoPoints(playerTwoPoints - 1);
    }
  }

  const saveGame = () => {
    setPastPoints([playerOnePoints, playerTwoPoints]);
  }


  return (
    <div className="App">
      <div className="container">
        <h1>2 Players Score Counter</h1>

        <p>Player 1 points: {playerOnePoints}</p>
        <p>Player 2 points: {playerTwoPoints}</p>

        <button className="btn btn-green" onClick={() => increase(1)}>Increase Score Player One</button>
        <button className="btn btn-green" onClick={() => decrease(1)}>Decrease Score Player One</button>
        <button className="btn btn-blue" onClick={() => increase(2)}>Increase Score Player Two</button>
        <button className="btn btn-blue" onClick={() => decrease(2)}>Decrease Score Player Two</button>
        <button className="btn btn-purple" onClick={() => saveGame()}>Save Game Score</button>


        <h2>Past Scores</h2>
        <p>Player 1 past points: {pastPoints[0]}</p>
        <p>Player 2 past points: {pastPoints[1]}</p>
      </div>

    </div>
  );
}

export default App;
