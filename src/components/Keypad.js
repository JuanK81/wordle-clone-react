import { useState, useEffect } from 'react';

import db from '../db/db';



const Keypad = ({ usedKeys, lang }) => {

    const [ letters, setLetters ] = useState(null);

    useEffect(() => {
        // fetch(`http://localhost:3001/letters-${lang}`)
        //   .then((res) => res.json())
        //   .then((json) => {
        //     setLetters(json);
        //   });
          if ( lang === 'en') {
      console.log('en', db.lettersEn);
      setLetters(db.lettersEn);
    } else {
      console.log('es', db.lettersEs);
      setLetters(db.lettersEs);
    }
    }, [lang]);

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