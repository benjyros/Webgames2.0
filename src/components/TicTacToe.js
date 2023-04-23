import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';

export default function TicTacToe() {
    const [loading, setLoading] = useState(false);
    const [showBeginScreen, setShowBeginScreen] = useState(true);
    const [showRestartBtn, setShowRestartBtn] = useState(false);

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const winner = calculateWinner(board);
        if (winner) {
            setStatus(`Player ${winner} has won!`);
            setShowRestartBtn(true);
        } else if (!board.includes(null)) {
            setStatus("It's a draw!");
            setShowRestartBtn(true);
        } else {
            setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
        }
    }, [board, xIsNext]);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><h1 className='text-2xl font-bold text-center'>Loading...</h1></div>;
    }

    function handleBeginClick() {
        setShowBeginScreen(false);
    }

    function handleRestartClick() {
        // Set status to player who has lost the game
        setStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
        setBoard(Array(9).fill(null));
        setShowRestartBtn(false);
    }

    const handleClick = (index) => {
        const squares = [...board];
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = xIsNext ? 'X' : 'O';
        setBoard(squares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (index) => {
        return (
            <button className="square btn" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    return (
        <section className="bg-[#ffe0e9] dark:bg-[#ffe0e9]">
            <Navbar />
            <div id="gameContent" style={{ backgroundColor: "#eb8faf" }}>
                {showBeginScreen ? (
                    <div>
                        <div id="gameTitle">TICTACTOE</div>
                        <button
                            id="startButton"
                            className="btn"
                            onClick={() => handleBeginClick()}
                        >
                            BEGIN
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="board-row">
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </div>
                        <div className="board-row">
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </div>
                        <div className="board-row">
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </div>
                        <div className="status">{status}</div>
                        {showRestartBtn && (
                            <div>
                                <button id="replay" className="btn" onClick={() => handleRestartClick()}>
                                    RESTART
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>

    );
}

function calculateWinner(squares) {
    // Define the winning lines as an array of arrays that represent the indices of squares
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Iterate over the winning lines to check if any player has completed one of them
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // If there is a winner, return the winner (either 'X' or 'O')
            return squares[a];
        }
    }

    // If there is no winner, return null
    return null;
}
