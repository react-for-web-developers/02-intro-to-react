function Player({ playerName, playerScore, playerScoreHandler }) {
  const handleIncreaseScore = (playerScore, handler) => handler(playerScore + 1);
  const handleDecreaseScore = (playerScore, handler) => handler(playerScore - 1);

  return(
    <div className='player'>
      <h3>{playerName}</h3>
      <h5>Score: {playerScore}</h5>
      <div>
        <button onClick={() => handleDecreaseScore(playerScore, playerScoreHandler)}>
          Decrease
        </button>
        <button onClick={() => handleIncreaseScore(playerScore, playerScoreHandler)}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default Player;