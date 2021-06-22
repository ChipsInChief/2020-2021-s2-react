import React from "react";
import "./GuessCount.css";

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>;

GuessCount.defaultProps = {
  guesses: 0,
};

export default GuessCount;
