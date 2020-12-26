import React, { useState, useEffect } from "react";
import "./QuestionCard.scss";
import data from "../data/question.json";

import { Button } from "antd";

const QuestionCard = () => {
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
      <div class="maincontainer">
        <div class="thecard">
          <div class="thefront">
            <h1>Front of Card</h1>
            <p>
              This is the front of the card. It contains important information.
              Please see overleaf for more details.
            </p>
          </div>

          <div class="theback">
            <h1>Back of Card</h1>
            <p>{questions.text}?</p>
            <p>Number: {questions.id}/100</p>
            <Button type="primary" onClick={getQuestion}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
