import "./Button.css";
import { useState } from "react";
import axios from "axios";
const Button = (props) => {
  const [advices, setAdvice] = useState("");

  const fetchData = () => {
    const response = axios.get("https://api.adviceslip.com/advice");
    response
      .then((response) => {
        const { advice } = response.data.slip.advice;
        setAdvice(response.data.slip.advice);
        props.getAdvice(response.data.slip.advice);
        console.log(advice);
      })
      .catch((err) => {
        console.log(`Error : ${err}`);
      });
  };
  return (
    <button onClick={fetchData} className="button">
      <span>Give Me Advice!!!</span>
    </button>
  );
};

export default Button;
