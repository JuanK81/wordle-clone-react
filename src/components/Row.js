const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => {
          return (
            <div key={i} className={`letter-box letter-box_${l.color}`}>
              <p>{l.key}</p>
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className="row row_current">
        {letters.map((letter, i) => {
          return (
            <div key={i} className="letter-box filled">
              <p className="letter-box_letter">{letter}</p>
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
