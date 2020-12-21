import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState("");
  const getQuestion = () => {
    fetch(" https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuestions(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="App">
      <div className="quote">
        <p>{questions.text}</p>
        <p>{questions.author}</p>
        <div className="btnContainer">
          <button className="btn" onClick={getQuestion}>
            Get Question
          </button>
          <a href="" className="btn">
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
