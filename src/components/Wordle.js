import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

import Grid from './Grid';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <p>current guess - {currentGuess}</p>
      <p> Solution is: {solution}</p>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      
    </div>
  );
}