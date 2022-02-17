import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h1 className={`Pokedex_title-${this.props.isWinner ? "win" : "loss"}`}>
          {this.props.isWinner ? "Winning" : "Losing"} Hand
        </h1>
        <p className="Pokedex-exp">Total exp: {this.props.exp}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                id={p.id}
                key={p.id}
                name={p.name}
                type={p.type}
                exp={p.exp}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
