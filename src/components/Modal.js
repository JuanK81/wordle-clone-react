import Button from './Button';

const Modal = ({ isCorrect, 
  turn, 
  solution, 
  lang,
  //  modalHandler
  }) => {
  let guessesTxt = '';
  let intentos = '';
  let textBtn = '';

  if (turn > 1) {
    guessesTxt = 'gueses.';
    intentos = 'intentos.';
  } else {
    guessesTxt = 'guess.';
    intentos = 'intento.';
  }

  if (lang === 'en') {
    textBtn = 'close';
  } else {
    textBtn = 'cerrar';
  };


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
            {turn} {lang === 'en' ? guessesTxt : intentos}
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
