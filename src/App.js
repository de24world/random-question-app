import React, { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState("");
  const getQuestion = () => {
    fetch(" https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <button onClick={getQuestion}>Get Question</button>
    </div>
  );
}

export default App;
