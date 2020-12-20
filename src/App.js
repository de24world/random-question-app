import React, { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState("");
  const getQuestion = () => {
    fetch(" https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuestions(data[randomNum]);
      });
  };
  return (
    <div className="App">
      {questions.text}
      <button onClick={getQuestion}>Get Question</button>
    </div>
  );
}

export default App;
