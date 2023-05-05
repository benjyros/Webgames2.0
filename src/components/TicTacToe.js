import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

export default function TicTacToe() {
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

    const boxes = Array.from({ length: 9 }).map((_, index) => {
        const boxValue = board[index];
        const isO = boxValue === 'O';
        const isX = boxValue === 'X';
        const colorClass = isO ? 'text-black' : isX ? 'text-red-500' : '';

        return (
            <div key={index} className={`flex items-center justify-center h-[75px] w-[75px] md:h-[100px] md:w-[100px] xl:h-[150px] xl:w-[150px] border-2 font-bold text-2xl md:text-4xl xl:text-6xl border-black ${colorClass}`} onClick={() => handleClick(index)}>
                {board[index]}
            </div>
        );
    });

    return (
        <section className="bg-[#fff5f8] justify-center select-none">
            <Navbar />
            <div className="flex justify-center">
                {showBeginScreen ? (
                    <div className='mt-56 h-screen'>
                        <p className='mb-12 text-center text-pink-500 text-3xl md:text-5xl'>TICTACTOE</p>
                        <button
                            className="btn w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200"
                            onClick={() => handleBeginClick()}
                        >
                            BEGIN
                        </button>
                    </div>
                ) : (
                    <div className='mt-24 mb-36'>
                        <div className='grid grid-cols-3'>
                            {boxes}
                        </div>
                        <p className='text-xl text-black font-bold'>{status}</p>
                        {showRestartBtn && (
                            <div>
                                <button className="btn mt-10 w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200" onClick={() => handleRestartClick()}>
                                    RESTART
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <Footer />
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
