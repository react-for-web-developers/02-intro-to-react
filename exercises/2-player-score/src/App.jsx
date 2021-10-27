import {useState} from 'react';
import Player from './components/Player'

function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [scores, setScores] = useState([]);
  const handleScoreSave = () => {
    setScores(prevState => ([
      ...prevState,
      { player1: player1Score, player2: player2Score }
    ]))
  }

  return (
    <div className="App">
      <Player 
        playerName='Player 1'
        playerScore={player1Score}
        playerScoreHandler={setPlayer1Score}
      />
      <Player 
        playerName='Player 2'
        playerScore={player2Score}
        playerScoreHandler={setPlayer2Score}
      />
      <br />
      <div 
        className='cta'
      >
      <button
        onClick={handleScoreSave}
      >
        Save Game
      </button>
      </div>
      <div className='scores'>
        <ul>
          {scores.map(score => (
            <li>
              <div>Player 1: {score.player1}</div>
              <div>Player 2: {score.player2}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
