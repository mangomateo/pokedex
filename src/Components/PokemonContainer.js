import React from 'react';
import Pokemon from './Pokemon';

const PokemonContainer = (props) => {
    return (
        <div className="card-container">
            <Pokemon data={props.pokemonOne} />
            <Pokemon data={props.pokemonTwo} />
            <Pokemon data={props.pokemonThree} />
            <Pokemon data={props.pokemonFour} />
            <Pokemon data={props.pokemonFive} />
            <Pokemon data={props.pokemonSix} />
        </div>
    );
}

export default PokemonContainer;