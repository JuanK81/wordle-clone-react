import { useEffect, useState } from 'react';
import './css/style.css';

import Wordle from './components/Wordle';
import Button from './components/Button';

import langIcon from './assets/language-white-small.png';

function App() {
  const [solution, setSolution] = useState(null);
  const [lang, setLang] = useState('en');

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
        
        setSolution(
          responseData.body.Word.normalize('NFD').replace(
            /[\u0300-\u036f]/g,
            ''
          )
        );

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
          'https://random-word-api.herokuapp.com/word?length=5&lang=en'
        );

        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const responseData = await response.json();

        setSolution(
          responseData[0]
        );
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
      setLang('es');
    } else {
      setLang('en');
    }
  };

  return (
    <div className="basic-container">
      <h1 className="basic-container_title"> React Wordle Clone</h1>

      <div className="language-container">
        <Button
        cssClass='no-border'
          text={<img className="icon" src={langIcon} alt="" />}
          onClick={changeLangHandler}
        />
        {lang === 'en' ? <p>EN</p> : <p>ES</p>}
      </div>

      {solution && <Wordle solution={solution} lang={lang} />}
    </div>
  );
}

export default App;
