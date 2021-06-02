import React from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onCardClick }) => (
  <div className={`card ${feedback}`} onClick={() => onCardClick(card)} >
    <span className="symbol">
      {feedback === "hidden" ? HIDDEN_SYMBOL : card}
    </span>
  </div>
);

export default Card

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
