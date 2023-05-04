import React, { useState, useEffect } from 'react';
import wordList from '../datas/wordlist.json';

import Navbar from './Navbar';

export default function Hangman() {
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
        setPreviousGuesses("");
        setWordArray(shuffledWordsToGuess[0]?.word.replace(/[a-zÄÖÜäöü]/gi, '_').split(''));
    }, []);


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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

    const getWordToGuess = wordArray.map((letter, index) => {
        return (
            <div className='text-black flex items-center justify-center rounded bg-[#eb8faf] h-9 w-9' key={index}>{letter}</div>
        );
    });

    return (
        <section className="bg-[#fff5f8] select-none">
            <Navbar />
            <div className="flex h-screen text-center justify-center">
                {showBeginScreen ? (
                    <div className='mt-56'>
                        <p className='mb-12 text-center text-pink-500 text-5xl'>HANGMAN</p>
                        <button
                            className="btn w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200"
                            onClick={() => handleBeginClick()}
                        >
                            BEGIN
                        </button>
                    </div>
                ) : (
                    <div className='mt-36'>
                        <div className='flex justify-center mb-8'>
                            <div className='h-[350px] w-[250px] border-2 border-gray-400 rounded'>

                            </div>
                        </div>
                        <div className='flex flex-wrap w-[750px] justify-center gap-2'>
                            {getWordToGuess}
                        </div>
                        {guessing ? (
                            <div>
                                <p className='font-bold text-black m-8'>
                                    HINT: {wordsToGuess[wordIndex]?.clue}
                                </p>
                                <form className='flex justify-center m-16' onSubmit={handleGuess}>
                                    <div>
                                        <div className='flex gap-4'>
                                            <p className="text-black">Letter:</p>
                                            <input className="bg-[#ffbfd5] text-center border border-gray-500 text-gray-900 rounded w-16 h-7" onChange={(e) => setGuess(e.target.value)} value={guess} required={true} />
                                        </div>
                                        <button type="submit" className="btn mt-4 w-24 m-auto bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200">OK</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="text-black">Previous guesses:</p>
                                    <p className="text-black font-bold">{previousGuesses}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='m-8'>
                                <p className='text-black font-bold'>{result}</p>
                                {lastWord ? (
                                    <div>
                                        <button className="btn mt-10 w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200" onClick={() => handleRestartClick()}>
                                            RESTART
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <button className="btn mt-10 w-24 m-auto cursor-pointer bg-[#fff5f8] rounded text-center text-gray-700 hover:bg-pink-200" onClick={() => handleContinueClick()}>
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
