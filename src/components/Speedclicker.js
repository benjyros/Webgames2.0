import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import finish from '../images/finish.png';

export default function Speedclicker() {
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
        }
    }, [countdown]);

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
        <section className="bg-[#fff5f8] justify-center select-none">
            <Navbar />
            <div className="flex text-center justify-center">
                {showBeginScreen && (
                    <div className='mt-56 h-screen'>
                        <p className='mb-12 text-center text-pink-500 text-5xl'>SPEEDCLICKER</p>
                        <button
                            className="btn w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200"
                            onClick={() => handleBeginClick()}
                        >
                            BEGIN
                        </button>
                    </div>
                )}
                {showStartScreen && (
                    <div className='mt-24 mb-36'>
                        <div
                            className='justify-center text-white items-center flex h-[500px] w-[500px] bg-[#eb8faf] border-2 border-gray-400 rounded'
                            onClick={() => handleStartClick()}
                        >
                            <div>
                                <p className='text-2xl font-bold'>Speedclicker</p>
                                <p>
                                    As soon the screen turns to light purple, click as often as you
                                    can.
                                </p>
                                <br />
                                <p className='text-xl font-bold'>click to start</p>
                            </div>
                        </div>
                    </div>
                )}
                {showGameScreen && (
                    <div className='mt-24 mb-36'>
                        {gameStarted ? (
                            <div className='justify-center text-white items-center flex h-[500px] w-[500px] bg-[#eb8faf] border-2 border-gray-400 rounded' onClick={() => handleGameClick()}>
                                <div>
                                    <p className='font-bold text-xl'>Timer: {(countdown / 1000).toFixed(2)}</p>
                                    <p className='font-bold text-xl'>
                                        Current clicks/s: {(clicks / (timer / 1000)).toFixed(2)}
                                    </p>
                                    <p className='font-bold text-xl'>Clicks: {clicks}</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className='justify-center text-white items-center flex h-[500px] w-[500px] bg-[#eb8faf] border-2 border-gray-400 rounded'>
                                    <div>
                                        <img className='mb-10 mx-auto' src={finish} alt="finishflag"/>
                                        <p className='font-bold text-2xl'>You did {clicks / (timer / 1000)} clicks/s</p>
                                        <p className='font-bold mb-3'>total of {clicks} clicks in 8 secs</p>
                                        <hr />
                                    </div>
                                </div>
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
