import React, { Component } from "react";
import shuffle from "lodash.shuffle";

import "./App.css";

import Card from "./Card";
import GuessCount from "./GuessCount";

const SIDE = 6;
const SYMBOLS = "ππππ©πΆπ±π¦π¬ππππ«ππππππΏ";

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
    console.log(card, "clicked");
  }

  render() {
    const won = new Date().getSeconds() % 2 === 0;
    return (
      <div className="memory">
        <GuessCount guesses={0} />
        <Card card="π" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="π" feedback="justMatched" onClick={this.handleCardClick} />
        <Card
          card="π"
          feedback="justMismatched"
          onClick={this.handleCardClick}
        />
        <Card card="π©" feedback="visible" onClick={this.handleCardClick} />
        <Card card="πΆ" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="π±" feedback="justMatched" onClick={this.handleCardClick} />
        {won && <p>GAGNΓ !</p>}
      </div>
    );
  }
}

export default App;
