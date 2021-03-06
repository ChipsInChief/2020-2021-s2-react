import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const HIDDEN_SYMBOL = "❓";

const Card = ({ card, feedback, onCardClick }) => (
  <div className={`card ${feedback}`} onClick={() => onCardClick(card)}>
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

Card.propTypes = {
  card: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    "hidden",
    "justMatched",
    "justMismatched",
    "visible",
  ]).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Card;

// Ancienne méthode de définition des fonctions JavaScript
// function Card({ card, feedback }) {
//   return (
//     <div className={`card ${feedback}`}>
//       <span className="symbol">
//         {feedback === "hidden" ? HIDDEN_SYMBOL : card}
//       </span>
//     </div>
//   );
// }
