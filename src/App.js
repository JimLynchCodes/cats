import React, { Component } from "react";

import css from './App.css';
import CatFetchingComponent from "./Cat";

class App extends Component {
  state = {
    pokedexNumber: 151
  };

  render() {
    return (
      <div className="App">
        <h1>Cats</h1>
        <button
          type="button"
          onClick={() =>
            this.setState({
              url: Math.floor(Math.random() * 22) + 1
            })
          }
        >
          Random Cat
        </button>
        <CatFetchingComponent url={this.state.url} /> 
        </div>
    );
  }
}

export default App;
