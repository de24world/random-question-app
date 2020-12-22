import React, { useState, useEffect } from "react";
import "./Question.css";
import data from "../data/question.json";

const Question = () => {
  // const [questions, setQuestions] = useState("");

  // const getQuestion = () => {
  //   fetch(" https://type.fit/api/quotes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let randomNum = Math.floor(Math.random() * data.length);
  //       setQuestions(data[randomNum]);
  //     });
  // };

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  return (
    <div>
      {/* 
      
      <div className="App">
        <div className="question">
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
      
      */}
    </div>
  );
};

export default Question;
