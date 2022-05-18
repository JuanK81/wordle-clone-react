import { useEffect, useState} from "react";

const GetWord = () => {
    const [randomWord, setRandomWord] = useState('')
   

     useEffect(() => {
       const fetchRandomWord = async () => {
        const response = await fetch(
           'https://palabras-aleatorias-public-api.herokuapp.com/random'
         );

         if (!response.ok) {
           throw new Error('Something went wrong!');
         }

         const responseData = await response.json();

         setRandomWord(responseData.body.Word);
       };

       fetchRandomWord()
         .then()
         .catch((error) => {
           console.log(error);
         });
     }, []);
     
    return randomWord
}; 

export default GetWord;