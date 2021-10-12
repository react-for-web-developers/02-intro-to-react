import { useState } from 'react';

function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [game, setGame] = useState([]);

  const handleIncrease1 = () => {
    setPlayer1(player1 + 1);
  };

  const handleDecrease1 = () => {
    setPlayer1(player1 - 1);
  };

  const handleIncrease2 = () => {
    setPlayer2(player2 + 1);
  };

  const handleDecrease2 = () => {
    setPlayer2(player2 - 1);
  };

  const saveGame = () => {
    setGame([[player1, player2], ...game]);
    console.log(game);
  };

  return (
    <div className="App">
      <h1>Exercise: 2 Player Score Counter</h1>
      <hr />
      <h3>Player 1: {player1}</h3>
      <button onClick={handleIncrease1}>Increase Score</button>
      <button onClick={handleDecrease1}>Decrease Score</button>
      <h3>Player 2: {player2}</h3>
      <button onClick={handleIncrease2}>Increase Score</button>
      <button onClick={handleDecrease2}>Decrease Score</button>
      <hr />
      <button onClick={saveGame}>Save game</button>
      <h3>Past scores:</h3>
      {game.map((game, i) => (
        <>
          <div>Player 1: {game[0]}</div>
          <div>Player 2: {game[1]}</div>
          {/* <div key={i}>{game}</div> */}
        </>
      ))}
    </div>
  );
}

export default App;
