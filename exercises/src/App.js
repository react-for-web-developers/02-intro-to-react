import './App.css';
import { useState } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'



function App() {

  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [savedGames, setSavedGames] = useState([]);

  const handleSave = () => {
    setSavedGames(
      [...savedGames, { 
          scoreP1, 
          scoreP2, 
          savedAt: formatDistanceToNow(new Date()) 
        }]);

        setScoreP1(0);
        setScoreP2(0);
      }
      ;

  return (
    <div className="App">
      <div className="scoreboard">
        <h1>SCORE</h1>
        <div className="scoreboard-wrapper">
          <div className="player-wrapper">
            <div className="score">
              {scoreP1}
            </div>
            <div className="player-tag">Player 1</div>
            <div className="btn-group">
              <button className="btn" onClick={() => setScoreP1(scoreP1 - 1)}>-</button>
              <button className="btn" onClick={() => setScoreP1(scoreP1 + 1)}>+</button>
            </div>
          </div>
          <div className="player-wrapper">
            <div className="score">
              {scoreP2}
            </div>
            <div className="player-tag">Player 2</div>
            <div className="btn-group">
              <button className="btn" onClick={() => setScoreP2(scoreP2 - 1)}>-</button>
              <button className="btn" onClick={() => setScoreP2(scoreP2 + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className="save-wrapper">
          <div className="title">
            <div className="ornament" />
            <h2>Saved Games</h2>
            <div className="ornament" />
          </div>
          <ul>
            {console.log(savedGames)}

            { savedGames.length > 0 &&

              savedGames.map((game, idx) => (
                <li key={idx}>
                  <div className="saved-score-wrapper">
                    <div className="saved-score"> Player 1: <span>{game.scoreP1}</span></div>
                    <div className="saved-score"> Player 2: <span>{game.scoreP2}</span></div>
                  </div>
                  <div className="date">{game.savedAt}</div>
                </li>
              ))
            }
          </ul>
          <button className="btn btn-save" onClick={() => setSavedGames(handleSave)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
