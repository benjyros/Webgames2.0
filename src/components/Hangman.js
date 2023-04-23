import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import wordList from '../datas/wordlist.json';

import Navbar from './Navbar';

export default function Hangman() {
    const [loading, setLoading] = useState(false);
    
    const [showBeginScreen, setShowBeginScreen] = useState(true);
    const [guessing, setGuessing] = useState(false);
    const [lastWord, setLastWord] = useState(false);

    const [wordIndex, setWordIndex] = useState(0);
    const [wordsToGuess, setWordsToGuess] = useState([]);
    const [wordArray, setWordArray] = useState([]);
    const [previousGuesses, setPreviousGuesses] = useState("");

    const [guess, setGuess] = useState('');
    const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
    const [result, setResult] = useState('');


    // Get JSON file
    useEffect(() => {
        const wordsToGuess = [];
        wordList.wordlist.forEach((word) => {
            const wordToGuess = {
                word: word.word,
                clue: word.clue
            }
            wordsToGuess.push(wordToGuess);
        });

        const shuffledWordsToGuess = shuffle(wordsToGuess);
        setWordsToGuess(shuffledWordsToGuess);
        setWordIndex(0);
        setWordArray(shuffledWordsToGuess[0]?.word.replace(/[a-zÄÖÜäöü]/gi, '_').split(''));
    }, []);


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    if (loading) {
        return <div className='flex h-screen items-center justify-center'><h1 className='text-2xl font-bold text-center'>Loading...</h1></div>;
    }

    function handleBeginClick() {
        setShowBeginScreen(false);
        setGuessing(true);
    }

    function handleContinueClick() {
        setWordIndex(wordIndex + 1);
        setWordArray(wordsToGuess[wordIndex + 1]?.word.replace(/[a-z]/gi, '_').split(''));
        setPreviousGuesses("");
        setGuessing(true);
    }

    function handleRestartClick() {
        const shuffledWordsToGuess = shuffle(wordsToGuess);
        setWordsToGuess(shuffledWordsToGuess);
        setWordIndex(0);
        setWordArray(shuffledWordsToGuess[0]?.word.replace(/[a-zÄÖÜäöü]/gi, '_').split(''));
        setPreviousGuesses("");

        setGuessing(true);
        setLastWord(false);
    }

    const getWordToGuess = () => {
        return (
            <div>
                {wordArray.map((letter, index) => {
                    return <div className='square btn' key={index}>{letter}</div>
                })}
            </div>
        );
    }

    const handleGuess = (event) => {
        event.preventDefault();
        setGuess("");
        const previous = previousGuesses.split(', ');

        if (/^[A-Za-z]$/i.test(guess)) {
            if (!previous.includes(guess)) {
                const count = checkGuess(guess.toUpperCase());

                if (count === 0) {
                    setWrongAnswerCount(wrongAnswerCount + 1);
                }

                checkWrongAnswerCount();

                if (wordIndex + 1 === wordsToGuess.length) {
                    setLastWord(true);
                }
            }
        }
    };

    const checkWrongAnswerCount = () => {
        if (wrongAnswerCount === 9) {
            setResult("You're Dead! (answer = " + wordsToGuess[wordIndex].word + ")");
            setGuessing(false);
        }
    }

    const checkGuess = (guess) => {
        let count = 0;
        let updatedWordArray = '';
        const wordToGuess = wordsToGuess[wordIndex]?.word.toUpperCase();
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guess) {
                updatedWordArray += guess;
                count++;
            } else if (wordArray[i] !== '_') {
                updatedWordArray += wordToGuess[i];
            } else {
                updatedWordArray += '_';
            }
        }

        setWordArray(updatedWordArray.split(''));
        if (!updatedWordArray.includes('_')) {
            setGuessing(false);
            setResult("CORRECT!");
        }

        if (previousGuesses === "") {
            setPreviousGuesses(guess);
        }
        else if (!previousGuesses.split(', ').includes(guess)) {
            setPreviousGuesses(previousGuesses + ", " + guess);
        }
        return count;
    }

    return (
        <section className="bg-[#ffe0e9] dark:bg-[#ffe0e9]">
            <Navbar />
            <div id="gameContent" style={{ backgroundColor: "#eb8faf" }}>
                {showBeginScreen ? (
                    <div>
                        <div id="gameTitle">HANGMAN</div>
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
                        <div id="drawing">

                        </div>
                        {getWordToGuess()}
                        {guessing ? (
                            <div>
                                <div id="hint">
                                    HINT: {wordsToGuess[wordIndex]?.clue}
                                </div>
                                <div id="guess">
                                    <form className="w-40" onSubmit={handleGuess}>
                                        <div className="grid grid-cols-2 grid-rows-2">
                                            <div className="col-start-1 flex-col justify-center grid place-content-center">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Letter:</label>
                                            </div>
                                            <div className="col-start-2 flex-col justify-center grid place-content-center">
                                                <input type="name" name="name" id="name" onChange={(e) => setGuess(e.target.value)} value={guess} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-16 h-12" required="" />
                                            </div>
                                            <div className="row-start-2 col-span-2 grid mt-2">
                                                <button type="submit" className="btn">OK</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div id="previousguesses">
                                    <p>Previous guesses:</p>
                                    <p>{previousGuesses}</p>
                                </div>
                            </div>
                        ) : (
                            <div>
                                {result}
                                {lastWord ? (
                                    <div>
                                        <button id="replay" className="btn" onClick={() => handleRestartClick()}>
                                            RESTART
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className="btn" onClick={() => handleContinueClick()}>
                                            CONTINUE
                                        </button>
                                    </div>
                                )}

                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
