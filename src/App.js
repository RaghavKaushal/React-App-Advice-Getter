import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import Button from "./components/UI/Button";
const App = () => {
  const [advices, setAdvice] = useState("");

  const getAdvice = (advice) => {
    setAdvice(advice);
  };

  useEffect(() => {
    const response = axios.get("https://api.adviceslip.com/advice");
    response
      .then((response) => {
        const { advice } = response.data.slip.advice;
        setAdvice(response.data.slip.advice);
        console.log(advice);
      })
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
    return response;
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advices}</h1>
        <Button getAdvice={getAdvice} />
      </div>
    </div>
  );
};

export default App;
