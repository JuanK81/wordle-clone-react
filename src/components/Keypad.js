import { useState, useEffect } from 'react';



const Keypad = ({ usedKeys, lang }) => {

    const [ letters, setLetters ] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/letters-${lang}`)
          .then((res) => res.json())
          .then((json) => {
            setLetters(json);
          });
    }, [lang])

    return (
      <div className='keypad'>
        {letters && letters.map((letter) => {

            const color = usedKeys[letter.key];

            return (
              <div
                className={`keypad_letter keypad_letter--${color}`}
                key={letter.key}
              >
                <p>{letter.key}</p>
              </div>
            );
        })}
      </div>
    );
};

export default Keypad;