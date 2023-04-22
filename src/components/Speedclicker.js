import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';

export default function Speedclicker() {
    const [loading, setLoading] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [showBeginScreen, setShowBeginScreen] = useState(true);
    const [showStartScreen, setShowStartScreen] = useState(false);
    const [showGameScreen, setShowGameScreen] = useState(false);
    const [gameStarted, setGameStarted] = useState();
    const [countdown, setCountdown] = useState(8000);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let timerId;
        if (gameStarted) {
            timerId = setInterval(() => {
                setCountdown((countdown) => countdown - 10);
                setTimer((timer) => timer + 10);
            }, 10);
        }
        return () => clearInterval(timerId);
    }, [gameStarted]);

    useEffect(() => {
        if (countdown === 0) {
            setGameStarted(false);
            // Timer has ended, do something here
        }
    }, [countdown]);

    const navigate = useNavigate();
    if (loading) {
        return <div className='flex h-screen items-center justify-center'><h1 className='text-2xl font-bold text-center'>Loading...</h1></div>;
    }

    function handleBeginClick() {
        setShowBeginScreen(false);
        setShowStartScreen(true);
    }

    function handleStartClick() {
        setShowStartScreen(false);
        setShowGameScreen(true);
        setGameStarted(true);
    }

    function handleRestartClick() {
        setTimer(0);
        setClicks(0);
        setCountdown(8000);
        setShowGameScreen(false);
        setShowStartScreen(true);
    }

    function handleGameClick() {
        setClicks((clicks) => clicks + 1);
    }

    return (
        <section className="bg-[#ffe0e9] dark:bg-[#ffe0e9]">
            <Navbar />
            <div id="gameContent" style={{ backgroundColor: "#eb8faf" }}>
                {showBeginScreen && (
                    <div>
                        <div id="gameTitle">SPEEDCLICKER</div>
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
                                <div>
                                    <h3>Speedclicker</h3>
                                    <p>
                                        As soon the screen turns to light purple, click as often as you
                                        can.
                                    </p>
                                    <br />
                                    <h5>click to start</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showGameScreen && (
                    <div>
                        {gameStarted ? (
                            <div id="game" onClick={() => handleGameClick()}>
                                <div id="play">
                                    <h4 id="countdown">Timer: {(countdown / 1000).toFixed(2)}</h4>
                                    <h4 id="currentClicks">
                                        Current clicks/s: {(clicks / (timer / 1000)).toFixed(2)}
                                    </h4>
                                    <h4 id="clicks">Clicks: {clicks}</h4>
                                </div>
                            </div>
                        ) : (
                            <div id="game">
                                <div id="end">
                                    <div>
                                        <img src="../Images/finish.png" alt="" id="finishFlag" />
                                        <h4>You did {clicks / (timer / 1000)} clicks/s</h4>
                                        <h6>total of {clicks} clicks in 8 secs</h6>
                                        <hr />
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
