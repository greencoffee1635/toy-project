import React, { useState, useRef } from "react";

const Wordgame = () => {
  const [word, setWord] = useState("가나다");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const answerInput = useRef(null);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const ox = (e) => {
    if (word[word.length - 1] === input[0]) {
      setResult("응");
      setWord(input);
      answerInput.current.focus();
    } else {
      setResult("놉");
      setInput("");
      answerInput.current.focus();
    }
  };

  return (
    <div>
      <h1>{word}</h1>
      <input ref={answerInput} value={input} onChange={onChange} />
      <button onClick={ox}>맞아?</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Wordgame;
