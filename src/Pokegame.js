import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", exp: 62 },
      { id: 7, name: "Squirtle", type: "water", exp: 63 },
      { id: 11, name: "Metapod", type: "bug", exp: 72 },
      { id: 12, name: "Butterfree", type: "flying", exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", exp: 95 },
      { id: 94, name: "Gengar", type: "poison", exp: 225 },
      { id: 133, name: "Eevee", type: "normal", exp: 65 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      hand1.push(hand2.splice(Math.floor(Math.random() * hand2.length), 1)[0]);
    }
    let expHand1 = hand1.reduce(
      (exp, currentPokemon) => exp + currentPokemon.exp,
      0
    );

    let expHand2 = hand2.reduce(
      (exp, currentPokemon) => exp + currentPokemon.exp,
      0
    );
    return (
      <div>
        <Pokedex
          pokemon={hand1}
          isWinner={expHand1 > expHand2}
          exp={expHand1}
        />
        <Pokedex
          pokemon={hand2}
          isWinner={expHand2 > expHand1}
          exp={expHand2}
        />
      </div>
    );
  }
}

export default Pokegame;
