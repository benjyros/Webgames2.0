import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import thunder from '../images/thunder.png';

export default function Reactionclicker() {
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
        <section className="bg-[#fff5f8] justify-center select-none">
            <Navbar />
            <div className="flex h-screen text-center justify-center">
                {showBeginScreen && (
                    <div className='mt-56 h-screen'>
                        <p className='mb-12 text-center text-pink-500 text-5xl'>REACTIONCLICKER</p>
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
                                <img className='mb-10 mx-auto' src={thunder} alt='thunder' />
                                <p className='text-2xl font-bold'>reaction time test</p>
                                <p>When it turns red, click as quickly as you can.</p>
                                <p className='font-bold'>click anywhere to begin</p>
                            </div>
                        </div>
                    </div>
                )}
                {showGameScreen && (
                    <div className='mt-24 mb-36'>
                        {gameStarted ? (
                            <div>
                                {isPlaying ? (
                                    <div onClick={() => handleWaitForGreenClick()}>
                                        {waitingForGreen ? (
                                            <div className='justify-center text-white items-center bg-[#ff6363] flex h-[500px] w-[500px] border-2 border-gray-400 rounded'>
                                                <div>
                                                    <p className='text-5xl font-bold'>wait for green...</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='justify-center text-white items-center bg-[#8cff8c] flex h-[500px] w-[500px] border-2 border-gray-400 rounded'>
                                                <div>
                                                    <p className='text-5xl font-bold'>click !</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className='justify-center text-white items-center bg-[#eb8faf] flex h-[500px] w-[500px] border-2 border-gray-400 rounded' onClick={() => handleResultClick()}>
                                        {earlyClick ? (
                                            <div>
                                                <div>
                                                    <p className='text-5xl font-bold'>too soon !</p>
                                                    <p className='font-bold'>click to try again.</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div>
                                                    <p className='text-5xl font-bold'>{result} ms</p>
                                                    <p className='font-bold'>click to keep going.</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                <div className='justify-center text-white items-center bg-[#f5ac6c] flex h-[500px] w-[500px] border-2 border-gray-400 rounded'>
                                    <div>
                                        <p className='text-xl m-2 font-bold'>your average was</p>
                                        <p className='text-5xl m-2'>{calculateAverage()} ms</p>
                                        <hr className='m-2 w-64 border-0 bg-white h-[2px]' />
                                        <p className='text-xl m-2 font-bold'>click to try again.</p>
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
