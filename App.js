import "./styles.css";
import { useState } from "react";

export default function App() {
  const [playerScore, setplayerScore] = useState([
    {
      name: "Player 1",
      count: 0
    },
    {
      name: "Player 2",
      count: 0
    }
  ]);

  const increase = (playerName) => {
    const playersEdited = playerScore.map((player) => {
      if (player.name === playerName) {
        return {
          ...player,
          count: player.count + 1
        };
      }
      return player;
    });
    console.log({ playersEdited });
    setplayerScore(playersEdited);
  };

  const decrease = (playerName) => {
    const playersEdited = playerScore.map((player) => {
      if (player.name === playerName) {
        return {
          ...player,
          count: player.count - 1
        };
      }
      return player;
    });
    setplayerScore(playersEdited);
  };

  return (
    <main>
      {/* react logo*/}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div> 
      {/* player 1*/}
      <div>
        {playerScore.map((player) => {
          return (
            <>
              <div>
                <h2 className="name">{player.name}</h2>
              </div>
              <div>
                <div className="score">{player.count}</div>
                {/* increase button */}
                <button onClick={() => increase(player.name)}>Increase</button>
                {/* decrease button */}
                <button onClick={() => decrease(player.name)}>Decrease</button>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
