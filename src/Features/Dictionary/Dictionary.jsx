import React, {
  Fragment,
  useState,
} from 'react';

import { useSelector } from 'react-redux';

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
//   const debounceTimer = useRef(null);

  // Fetch dictionaryWord array from Redux state
  const dictionary = useSelector((state) => state.dictionary.dictionaryWord);

//   // Debounce function
//   const debounce = (callback, timer) => {
//     return (...args) => {
//       if (debounceTimer.current) {
//         clearTimeout(debounceTimer.current);
//       }
//       debounceTimer.current = setTimeout(() => {
//         callback(...args);
//       }, timer);
//     };
//   };

  // Find the meaning of the word
  const findMeaning = () => {
    const result = dictionary.find((ele) => 
      ele.word.toLowerCase() === word.trim().toLowerCase()
    );
    setMeaning(result ? result.meaning : "Word not found in the dictionary.");
  };

//   // Handle input change with debounce
//   const handleChange = debounce((e) => {
//     const { value } = e.target;
//     setWord(value);
//   }, 2000);

  return (
    <Fragment>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={word}
        placeholder="Search For a word"
        onKeyDown={findMeaning}
        onChange={(e)=>setWord(e.target.value)}
      />
      <button onClick={findMeaning}>Search</button>
      <h5>Definition:</h5>
      <p>{meaning}</p>
    </Fragment>
  );
};

export default Dictionary;
