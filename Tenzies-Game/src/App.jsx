import Die from './components/Die'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(() => generateRandomNumber());

  let gameWon = false

  if (dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)) {
    console.log('Game won!');
    gameWon = true
  }

  function generateRandomNumber() {
    return new Array(10).fill(0)
      .map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }));
  }

  function hold(id) {
    setDice(dice.map(die => {
      if (die.id === id) {
        return { ...die, isHeld: !die.isHeld }
      }
      return die;
    }))
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      if (die.isHeld) {
        return die;
      }
      return { ...die, value: Math.ceil(Math.random() * 6) }
    }));
  }

  function resetDice() {
    setDice(generateRandomNumber());
  }


  const diceElements = dice.map(dieObj =>
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />)


  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {gameWon && <Confetti />}
      <h1 className="font-bold text-5xl">Tenzies</h1>
      <p className="mb-8 mt-5 text-lg">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow-lg">
        {diceElements}
      </div>
      <div className='flex items-center gap-4'>
        {!gameWon ? <button
          className="mt-8 w-[70px] bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={rollDice}
        >
          Roll
        </button> :
          <button className="mt-8 w-[150px] bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={resetDice}
          >
            New Game
          </button>}
      </div>
    </main>
  )
}