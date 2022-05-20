import Button from './Button';

const Modal = ({ isCorrect, turn, solution, lang }) => {
  let guesses = '';
  let intentos = '';
  let textBtn = '';

  if (turn > 1) {
    guesses = 'gueses.';
    intentos = 'intentos.';
  } else {
    guesses = 'guess.';
    intentos = 'intento.';
  }

  if (lang === 'en') {
    textBtn = 'Try again';
  } else {
    textBtn = 'Jugar otra';
  }

  const restartHandler = () => {
    window.location.reload(false);
  };

  return (
    <div className="modal">
      {isCorrect && (
        <div className="modal_container">
          <h2 className="modal_title win">
            {lang === 'en' ? 'You Win!' : 'Enhorabuena!'}
          </h2>
          <p className="solution">{solution}</p>
          <p>
            {lang === 'en'
              ? 'You found the solution in'
              : 'Encontraste la solución en'}{' '}
            {turn} {lang === 'en' ? guesses : intentos}
          </p>
          <Button onClick={restartHandler} text={textBtn} />
        </div>
      )}
      {!isCorrect && (
        <div className="modal_container fail">
          <h2 className="modal_title">
            {lang === 'en' ? 'You Loose!' : 'Perdiste!'}
          </h2>
          <p className="solution">{solution}</p>
          <p>
            {lang === 'en'
              ? 'Better luck next time.'
              : 'Más suerte para la próxima!'}
          </p>
          <Button onClick={restartHandler} text={textBtn} />
        </div>
      )}
    </div>
  );
};

export default Modal;
