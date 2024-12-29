import { useState, useEffect } from "react";
import clsx from "clsx";
import { languages } from "./Languages/Languages.js";
import { getRandomWord, getFarewellText } from "./Languages/Utils.js";
import "./App.css"; // Import the custom CSS
import Confetti from 'react-confetti';

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [languageStatus, setLanguageStatus] = useState([]);

  // Derived values
  const numGuessesLeft = languages.length - 1;
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    const initialStatus = languages.map((lang) => ({
      name: lang.name,
      backgroundColor: lang.backgroundColor,
      color: lang.color,
      status: getRandomWord(), // Assuming getRandomWord returns a status
    }));
    setLanguageStatus(initialStatus);
  }, []);

  function addGuessedLetter(letter) {
    setGuessedLetters(prevLetters =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
    const newStatus = languages.map((lang) => ({
      name: lang.name,
      backgroundColor: lang.backgroundColor,
      color: lang.color,
      status: getRandomWord(), // Assuming getRandomWord returns a status
    }));
    setLanguageStatus(newStatus);
  }

  const languageElements = languageStatus.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    };
    const className = clsx("language-element", isLanguageLost && "lost");
    return (
      <span
        className={`${className} w-[150px] text-center p-2 rounded-lg shadow-md mt-2 cursor-pointer relative`}
        style={styles}
        key={lang.name}
      >
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={`flex justify-center items-center w-[40px] h-[40px] bg-[#323232] text-white text-lg border-b-2 border-b-[#99968a] ${letterClassName}`}>
        {shouldRevealLetter ? letter.toUpperCase() : "_"}
      </span>
    );
  });

  const keyboardElements = alphabet.split("").map(letter => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      "bg-green-500": isCorrect,
      "bg-red-500": isWrong,
      "bg-[#92732f]": !isGuessed,
    });

    return (
      <button
        className={`${className} w-[40px] h-[40px] text-white text-lg border-2 border-[#D7D7D7] cursor-pointer`}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        disabled={isGuessed || isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    "bg-green-500": isGameWon,
    "bg-red-500": isGameLost,
    "bg-[#10A95B]": !isGameOver,
    "hidden": !isGameOver,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2 className="text-2xl font-semibold text-[#D9D9D9] mb-2">You Win!</h2>
          <p className="text-lg text-[#D9D9D9]">Well Done!</p>
          <p className="farewell-message">
            {getFarewellText(languages[wrongGuessCount - 1].name)}
          </p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2 className="text-2xl font-semibold text-[#D9D9D9] mb-2">Game Over</h2>
          <p className="text-lg text-[#D9D9D9]">You lose! Better start learning Assembly 😭</p>
          <p className="farewell-message">
            {getFarewellText(languages[wrongGuessCount - 1].name)}
          </p>
        </>
      );
    }

    return null;
  }

  return (
    <>
      <main className="flex flex-col items-center min-h-screen bg-[#262626] p-4 pt-9">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#D9D9D9] mb-2">Assembly: Endgame</h1>
          <p className="text-lg text-[#D9D9D9]">
            Guess the word within 8 attempts to keep the programming world safe from Assembly!
          </p>
        </header>
        <section className={` ${gameStatusClass} game-status  py-3 px-40 rounded-lg shadow-md text-center justify-center items-center`}>
          {renderGameStatus()}
        </section>
        <section className="flex flex-wrap justify-center mt-8 gap-1 max-w-[700px] ">
          {languageElements}
        </section>
        <section className="flex justify-center mt-8">
          {letterElements}
        </section>
        <section className="flex flex-wrap gap-2 justify-center mt-8 max-w-[450px]">
          {keyboardElements}
        </section>
        {isGameWon && <Confetti />}
        {isGameOver && <button onClick={startNewGame}
          className="mt-4 outline-none text-black bg-blue-500 px-10 py-2 rounded-md shadow-md hover:bg-blue-600">
          New Game
        </button>}
      </main>
    </>
  );
}