import React, { Component } from "react";
import "./App.css";
import GuessCount from "./GuessCount";
import Card from './Card'

import shuffle from "lodash.shuffle";

const SIDE = 6;
const SYMBOLS = "😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿";

class App extends Component {
  cards = this.generateCards();

  generateCards() {
    const result = [];
    const size = SIDE * SIDE;
    const candidates = shuffle(SYMBOLS);
    while (result.length < size) {
      const card = candidates.pop();
      result.push(card, card);
    }
    return shuffle(result);
  }

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
