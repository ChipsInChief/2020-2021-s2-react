import React from "react";

import "./HallOfFame.css";

const HallOfFame = ({ entries }) => (
  <table className="hallOfFame">
    <tbody>
      {
        entries.map(({ id, guesses, date, player }) => (
          <tr key={id}>
            <td className="date">{ date }</td>
            <td className="guesses">{ guesses }</td>
            <td className="player">{ player }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default HallOfFame;
