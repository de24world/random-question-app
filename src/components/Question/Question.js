import React, { useState, useEffect } from "react";
import "./Question.css";
import data from "../data/question.json";

const Question = () => {
  const [questions, setQuestions] = useState("");
  const getQuestion = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuestions(data[randomNum]);
  };

  useEffect(() => {
    getQuestion();
  }, []);

  console.log(data);

  return (
    <div>
      <div className="Question">
        <div className="question" onClick={getQuestion}>
          <p>{questions.text}?</p>
          <p>Number: {questions.id}/100</p>
        </div>
        {/* <div className="btnContainer">
          <button className="btn" onClick={getQuestion}>
            Get Question
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Question;
