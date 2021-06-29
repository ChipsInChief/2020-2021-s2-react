import React, { Component } from "react";
import "./App.css";
import GuessCount from "./GuessCount";
import Card from "./Card";

import shuffle from "lodash.shuffle";
import HallOfFame from "./HallOfFame";
import { FAKE_HOF } from "./FakeData/FakeHof";

const SIDE = 6;
const SYMBOLS = "😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿";

class App extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
  };

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

  // Méthode définie sous forme de fonction fléchée pour besoin de binding (utilisation du this)
  handleCardClick = (card) => {
    console.log(card, this);
  };

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state;
    const indexMatched = matchedCardIndices.includes(index);

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? "visible" : "hidden";
    }

    if (currentPair.includes(index)) {
      return indexMatched ? "justMatched" : "justMismatched";
    }

    return indexMatched ? "visible" : "hidden";
  }

  // won = new Date().getSeconds() % 2 === 0;

  render() {
    const { cards, guesses, matchedCardIndices } = this.state;
    const won = matchedCardIndices.length === cards.length;

    return (
      <div className="memory">
        <GuessCount guesses={guesses} />
        {cards.map((card, index) => (
          <Card
            card={card}
            feedback={this.getFeedbackForCard(index)}
            key={index}
            onCardClick={this.handleCardClick}
          />
        ))}
        {this.won && <p>GAGNÉ !</p>}
        {<HallOfFame entries={FAKE_HOF} />}
      </div>
    );
  }
}

export default App;
