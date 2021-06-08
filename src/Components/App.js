import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './Header';
import PokemonContainer from './PokemonContainer';

class App extends Component {

  state = {
    pokemon1: [],
    pokemon2: [],
    pokemon3: [],
    pokemon4: [],
    pokemon5: [],
    pokemon6: []
  }

  handleRNG() {
    return Math.floor(Math.random() * 152);
  }
  
  // Performed multiple axios requests more elegantly using axios.all() as explained in this article: 
  // https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios

  componentDidMount() {

    const pokemon1 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);
    const pokemon2 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);
    const pokemon3 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);
    const pokemon4 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);
    const pokemon5 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);
    const pokemon6 = axios.get(`https://pokeapi.co/api/v2/pokemon/${this.handleRNG()}`);


    axios.all([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6])
      .then(axios.spread((...responses) => {
        this.setState({
          pokemon1: [responses[0].data],
          pokemon2: [responses[1].data],
          pokemon3: [responses[2].data],
          pokemon4: [responses[3].data],
          pokemon5: [responses[4].data],
          pokemon6: [responses[5].data]
        });
      }))
      .catch((error) => console.log('Oops!', error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PokemonContainer 
          pokemonOne={this.state.pokemon1}
          pokemonTwo={this.state.pokemon2}
          pokemonThree={this.state.pokemon3}
          pokemonFour={this.state.pokemon4}
          pokemonFive={this.state.pokemon5}
          pokemonSix={this.state.pokemon6}
        />
      </div>
    );
  }
}

export default App;
