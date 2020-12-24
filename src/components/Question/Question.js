import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

import "./Question.css";
import data from "../data/question.json";

const Question = () => {
  const [questions, setQuestions] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  console.log(data);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="front">
        This is the front of the card.
        <button onClick={handleClick}>Go to Back</button>
      </div>

      <div className="back">
        <p>{questions.text}?</p>
        <p>Number: {questions.id}/100</p>
        <button onClick={handleClick}>Go to Front</button>
        <button className="btn" onClick={getQuestion}>
          Get Question
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Question;
