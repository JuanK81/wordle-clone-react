import { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup]);
  return (
    <div>
      <p>current guess - {currentGuess}</p>
      <p> Solution is: {solution}</p>
    </div>
  );
}
