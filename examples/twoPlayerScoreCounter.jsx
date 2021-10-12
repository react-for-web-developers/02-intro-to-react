import React, { useState } from 'react';


function App() {
    const [player1, setPlayer1] = useState(0);
    const [player2, setPlayer2] = useState(0);
    const [scores, setScores] = useState([]);

    const increasePlayer1 = () => setPlayer1(player1 + 1);
    const decreasePlayer1 = () => {
        if(player1 > 0) {
            setPlayer1(player1 - 1);
        }
    }

    const saveGame = () => {
        setScores([...scores, {
            player1,
            player2,
        }])
        setPlayer1(0);
        setPlayer2(0);
    };

    return (
        <main>
            <section>
                <div>Player 1:</div>
                <div>{player1}</div>
                <button onClick={increasePlayer1}>Increase</button>
                <button onClick={decreasePlayer1}>Decrease</button>
            </section>
            <section>
                <div>Player 2:</div>
                <div>{player2}</div>
                <button onClick={() => setPlayer2(player2 + 1)}>Increase</button>
                <button onClick={() => setPlayer2(player2 - 1)}>Decrease</button>
            </section>
            <aside>
                <button onClick={saveGame}>Save Game</button>
            </aside>
            <div>
                {scores.map(({player1, player2}) => (
                    <div>
                        <div>Player 1: {player1}</div>
                        <div>Player 2: {player2}</div>
                    </div>
                ))}
            </div>
        </main>
    );
}