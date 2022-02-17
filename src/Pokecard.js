import React, { Component } from "react";
import "./Pokecard.css";
const IMG_PATH = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    const paddedId = ("" + this.props.id).padStart(3, "0");
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{this.props.name}</h3>
        <div class="Pokecard-img">
          <img src={`${IMG_PATH}${paddedId}.png`} alt={this.props.name} />
        </div>
        <p className="Pokecard-data">
          TYPE: {this.props.type.toUpperCase()}
          <br />
          EXP: {this.props.exp}
        </p>
      </div>
    );
  }
}

export default Pokecard;
