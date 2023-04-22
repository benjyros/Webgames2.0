import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';

export default function Reactionclicker() {
    const [loading, setLoading] = useState(false);

    const [showBeginScreen, setShowBeginScreen] = useState(true);
    const [showStartScreen, setShowStartScreen] = useState(false);
    const [showGameScreen, setShowGameScreen] = useState(false);

    const [result, setResult] = useState();
    const [results, setResults] = useState([]);
    const [gameStarted, setGameStarted] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [waitingForGreen, setWaitingForGreen] = useState(false);
    const [earlyClick, setEarlyClick] = useState(false);

    const [countdownTimer, setCountdownTimer] = useState();
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {

        let timerId;
        if (waitingForGreen) {
            timerId = setInterval(() => {
                setCountdown((countdown) => countdown - 10);
            }, 10);
        }
        return () => clearInterval(timerId);
    }, [waitingForGreen]);

    useEffect(() => {
        if (countdown <= 0) {
            setWaitingForGreen(false);

            const date = new Date();
            setCountdownTimer(date);
            // Timer has ended, do something here
        }
    }, [countdown]);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><h1 className='text-2xl font-bold text-center'>Loading...</h1></div>;
    }

    function handleBeginClick() {
        setShowBeginScreen(false);
        setShowStartScreen(true);
    }

    function handleStartClick() {
        const num = Math.floor(Math.random() * 5001) + 1500;
        setCountdown(num);

        setShowStartScreen(false);
        setShowGameScreen(true);
        setGameStarted(true);
        setIsPlaying(true);
        setWaitingForGreen(true);
    }

    function handleRestartClick() {
        setResults([]);

        setShowGameScreen(false);
        setShowStartScreen(true);
    }

    function handleWaitForGreenClick() {
        setWaitingForGreen(false);
        setIsPlaying(false);

        if (waitingForGreen) {
            setEarlyClick(true);
        } else {
            setEarlyClick(false);
            const result = new Date() - countdownTimer;
            setResult(result);
            setResults([...results, result]);

            if (results.length === 4) {
                setGameStarted(false);
            }
        }
    }

    function handleResultClick() {
        const num = Math.floor(Math.random() * 5001) + 1500;
        setCountdown(num);

        setIsPlaying(true);
        setWaitingForGreen(true);
    }

    const calculateAverage = () => {
        const sum = results.reduce((total, num) => total + num, 0);
        const average = sum / results.length;
        return average;
    }

    return (
        <section className="bg-[#ffe0e9] dark:bg-[#ffe0e9]">
            <Navbar />
            <div id="gameContent" style={{ backgroundColor: "#eb8faf" }}>
                {showBeginScreen && (
                    <div>
                        <div id="gameTitle">REACTIONCLICKER</div>
                        <button
                            id="startButton"
                            className="btn"
                            onClick={() => handleBeginClick()}
                        >
                            BEGIN
                        </button>
                    </div>
                )}
                {showStartScreen && (
                    <div>
                        <div
                            id="start"
                            onClick={() => handleStartClick()}
                        >
                            <div id="startScreen">
                                <div id='start'>
                                    <div>
                                        <img src='../Images/thunder.png' alt='' class='images' />
                                        <h1 class='gameText'>reaction time test</h1><h1 class='gameUnderText h5'>When it turns red, click as quickly as you can.</h1>
                                        <h1 class='gameUnderText h5'>click anywhere to begin</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showGameScreen && (
                    <div>
                        {gameStarted ? (
                            <div>
                                {isPlaying ? (
                                    <div id="game" onClick={() => handleWaitForGreenClick()}>
                                        {waitingForGreen ? (
                                            <div id='waitForGreen'>
                                                <div>
                                                    <h1 class='gameText'>wait for green...</h1>
                                                </div>
                                            </div>
                                        ) : (
                                            <div id='turnGreen'>
                                                <div>
                                                    <h1 class='gameText'>click !</h1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div onClick={() => handleResultClick()}>
                                        {earlyClick ? (
                                            <div id='clickedTooEarly'>
                                                <div>
                                                    <h1 class='gameText'>too soon !</h1>
                                                    <h1 class='gameUnderText h5'>click to try again.</h1>
                                                </div>
                                            </div>
                                        ) : (
                                            <div id='onGreenClick'>
                                                <div>
                                                    <h1 class='gameText'>{result} ms</h1>
                                                    <h1 class='gameUnderText h5'>click to keep going.</h1>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div id="game">
                                <div id="end">
                                    <div>
                                        <div id='resultScreen'>
                                            <div>
                                                <h1 class='gameUnderText h5'>your average was</h1>
                                                <h1 class='gameText'>{calculateAverage()} ms</h1>
                                                <hr />
                                                <h1 class='gameUnderText h5'>click to try again.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
