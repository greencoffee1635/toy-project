import React, { useState, useRef } from "react";

function Gugudan({ first, second, result }) {
  const [check, setCheck] = useState(""); // 바뀌는 값 ""는 초기값
  const answerInput = useRef();
  const ox = () => {
    if (Number(answerInput.current.value) === result) {
      setCheck("응");
    } else {
      setCheck("놉");
    }
  };

  return (
    <div>
      <h1>
        {first} x {second} = ?
      </h1>
      <input type="number" ref={answerInput} />
      <button onClick={ox}>맞아?</button>
      <h1>{check}</h1>
    </div>
  );
}

export default Gugudan;
