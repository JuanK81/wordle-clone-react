import { useEffect, useState,  } from 'react';
import './css/style.css';

import Wordle from './components/Wordle';
import Button from './components/Button';


function App() {
  const [solution, setSolution] = useState(null);
  const [lang, setLang] = useState('es');

  useEffect(() => {
    if (lang === 'es') {
      const fetchRandomWordEs = async () => {
        const response = await fetch(
          'https://palabras-aleatorias-public-api.herokuapp.com/random-by-length?length=5'
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        setSolution(responseData.body.Word);
      };

      fetchRandomWordEs()
        .then()
        .catch((error) => {
          console.log(error);
        });
    }

    if (lang === 'en') {
      const fetchRandomWordEn = async () => {
        const response = await fetch(
          'https://random-word-api.herokuapp.com/word?length=5'
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        setSolution(responseData);
      };

      fetchRandomWordEn()
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lang, setLang]);

  const changeLangHandler = () => {
    if (lang === 'en') {
      setLang('es')
    } else {
      setLang('en')
    };
    console.log(lang)
  };

  return (
    <div className="basic-container">
      <h1 className="basic-container_title"> React Wordle Clone</h1>
      {lang === 'en' ? <p>EN</p> : <p>ES</p>}
      <Button text={lang === 'en' ? 'Cambiar idioma' : 'Change languaje'} onClick={changeLangHandler} />
      {solution && <Wordle solution={solution} lang={lang}/>}
    </div>

    /* 
data we need to track:
  -- solution
    -- 5 letter string, e.g. 'drain'
  -- past guesses
    -- an array of past guesses
    -- each past guess is an array of letter objects [{}, {}, {}, {}, {}]
    -- each object represents a letter in the guess word {letter: 'a', color: 'yellow'}
  -- current guess
    -- string 'hello'
  -- keypad letters
    -- array of letter objects [{key: 'a', color: 'green'}, {}, {} ...]
  -- number of turns
    -- an integer 0 - 6
game process:
  -- entering words:
    -- user enters a letter & a square is filled with that letter
    -- when a user hits delete it deletes the previous letter
    -- when a user hits enter it submits the word
      -- if all squares are not filled with letters then the word is not submitted
      -- if that word has already been used in a prev guess then the word is not submitted
  -- checking submitted words:
    -- each letter is checked to see if it matches to the solution
    -- each letter is assigned a color based on it's inclusion in the solution
      -- exact matches (correct position in the solution) are green
      -- partial matches (in the solution but not the correct position) are yellow
      -- none-matches (not in the solution at all) are grey
    -- the guess is added the grid with the correct colors
    -- the current guess moves to the next row
    -- the keypad letters are updated (colors)
  -- ending the game:
    -- when the guessed word fully matches the solution
      -- modal to say 'well done'
    -- when the user runs out of guesses
      -- modal to say 'unlucky'
*/
  );
}

export default App;
