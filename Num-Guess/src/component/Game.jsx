import React, { useState } from 'react';
import './styles.css'
function Game() {
  const [range, setRange] = useState([0, 100]);
  const [totGuess, setTotGuess] = useState(3);
  const [guesses, setGuesses] = useState(0);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('You have not guessed yet!');
  const [actGuess, setActGuess] = useState(50);
  const [gameOver, setGameOver] = useState(false);

  function Guess() {
    const numericGuess = Number(guess);
    console.log('User guessed:', numericGuess);

    if (gameOver) return;

    if (guesses + 1 >= totGuess) {
      setResult('You have used up all your guesses!');
      setGameOver(true);
      setTimeout(() => {
        setResult('Go again');
      }, 3000);
      return;
    }

    if (numericGuess === actGuess) {
      setResult('You have guessed it correctly');
      setGameOver(true);
      setTimeout(() => {
        setResult('Go again');
      }, 3000);
      return;
    }

    setGuesses(guesses + 1);
    if (numericGuess > actGuess) setResult('Try Lower');
    else setResult('Try Higher');
  }

  function change() {
    const lowRange = Math.floor(Math.random() * 41); // 0 to 40
    const highRange = Math.floor(Math.random() * 41) + 60; // 60 to 100
    const newActGuess = Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange;
    const newTotGuess = Math.floor(Math.random() * (10 - 4 + 1)) + 4;

    setRange([lowRange, highRange]);
    setTotGuess(newTotGuess);
    setActGuess(newActGuess);
    setGuesses(0);
    setGuess('');
    setResult('Game reset. Start guessing!');
    setGameOver(false);

    console.log(`New range: ${lowRange} to ${highRange}`);
    console.log(`Target guess: ${newActGuess}`);
    console.log(`Total guesses allowed: ${newTotGuess}`);
  }

  return (
    <div className='forall'>
      <div className='head'>
        <button onClick={change}>Click To Start</button>
        <p className='disp-range'>{range[0]} --- {range[1]}</p>
      </div>
      <div className="container">
        <textarea
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
        <button onClick={Guess} disabled={gameOver}>Guess</button>
      </div>
      <div>
        <p>{result}</p>
        <p>Guesses Used: {guesses} / {totGuess}</p>
      </div>
    </div>
  );
}

export default Game;
