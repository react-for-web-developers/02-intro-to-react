import { useState } from "react";
import "./App.css";

const App = () => {
	const [player1Score, setPlayer1Score] = useState(0);

	const [player2Score, setPlayer2Score] = useState(0);

	const [finalScores, setFinalScores] = useState([]);

	// player1 increment score
	const increasePlayer1Score = () => {
		setPlayer1Score(player1Score + 1);
	};
	// plauer2 decrement score
	const decreasePlayer1Score = () => {
		if (player1Score <= 0) return;
		setPlayer1Score(player1Score - 1);
	};

	// player2 increment score
	const increasePlayer2Score = () => {
		setPlayer2Score(player2Score + 1);
	};

	// plauer2 decrement score
	const decreasePlayer2Score = () => {
		if (player2Score <= 0) return;
		setPlayer2Score(player2Score - 1);
	};

	// Final scores
	const saveFinalScore = () => {
		setFinalScores([...finalScores, { player1Score, player2Score }]);
		setPlayer1Score(0);
		setPlayer2Score(0);
	};

	return (
		<div>
			{/** Heading */}
			<div className="app">
				<h1>Score Counter</h1>
			</div>
			<div className="score__container">
				{/** Player 1 Scores */}
				<div className="player__score">
					<h2>Player 1: {player1Score}</h2>
					<button className="btn btn-increment" onClick={increasePlayer1Score}>
						Increase Score
					</button>
					<button className="btn btn-decrement" onClick={decreasePlayer1Score}>
						Decrease Score
					</button>
				</div>

				{/** Player 2 Scores */}
				<div className="player__score">
					<h2>Player 2: {player2Score}</h2>
					<button className="btn btn-increment" onClick={increasePlayer2Score}>
						Increase Score
					</button>
					<button className="btn btn-decrement" onClick={decreasePlayer2Score}>
						Decrease Score
					</button>
				</div>
			</div>
			{/** Save button */}
			<div className="final__score">
				<button className="btn" onClick={saveFinalScore}>
					Save Game
				</button>
			</div>
			{/** Final scores */}
			<div className="result">
				{finalScores &&
					finalScores.map((score, index) => (
						<div className="scores" key={index}>
							<h3 className="scores__player">Player 1: {score.player1Score}</h3>
							<h3 className="scores__player">Player 2: {score.player2Score}</h3>
						</div>
					))}
			</div>
		</div>
	);
};

export default App;
