import { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';

import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solution, lang }) {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      console.log('you win!');
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => {
      window.removeEventListener('keyup', handleKeyup);
    };
  }, [handleKeyup, isCorrect, turn]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect);
  // }, [guesses, turn, isCorrect]);

  

  return (
    <div>
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
      {/* <h1 className="basic-container_title"> React Wordle Clone</h1> */}
      
      {/* <p> Solution is: {solution}</p> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}  lang={lang}/>
    </div>
  );
}
