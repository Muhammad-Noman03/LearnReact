import Die from './components/Die'
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function App() {
  const [dice, setDice] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return new Array(10).fill(0)
      .map(() => ({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() }));
  }

  function rollDice() {
    setDice(generateRandomNumber());
  }

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />)


  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg shadow-lg">
        {diceElements}
      </div>
      <button
        className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  )
}