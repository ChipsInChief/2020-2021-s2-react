import React, { Component } from "react";
import "./App.css";
import GuessCount from "./GuessCount";
import Card from './Card'

class App extends Component {
  handleCardClick(card) {
    console.log(card, " clicked !");
  }

  won = new Date().getSeconds() % 2 === 0;

  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="😀" feedback="hidden" onCardClick={this.handleCardClick} />
        <Card card="🎉" feedback="justMatched" onCardClick={this.handleCardClick} />
        <Card card="💖" feedback="justMismatched" onCardClick={this.handleCardClick} />
        <Card card="🎩" feedback="visible" onCardClick={this.handleCardClick} />
        <Card card="🐶" feedback="hidden" onCardClick={this.handleCardClick} />
        <Card card="🐱" feedback="justMatched" onCardClick={this.handleCardClick} />
        { this.won && <p>GAGNÉ !</p> }
      </div>
    );
  }
}

export default App;
