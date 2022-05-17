const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => {
          return (
            <div key={i} className="letter-box">
              <p className={`letter-box_${l.color}`}>{l.key}</p>
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className="row current">
        {letters.map((letter, i) => {
          return (
            <div key={i} className="letter-box filled">
              {letter}
            </div>
          );
        })}
        ;
        {[...Array(5 - letters.length)].map((_, i) => {
          return <div key={i} className="letter-box"></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
      <div className="letter-box"></div>
    </div>
  );
};

export default Row;
