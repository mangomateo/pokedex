import React from 'react';

const Pokemon = (props) => {
    return (
        // <div className="pokemon-card">
        //     { (props.data.length !== 0) ? <p>{props.data[0].name}</p> : <p>Loading name...</p> }
        //     { (props.data.length !== 0) ? <img src={props.data[0].sprites.other.dream_world.front_default} alt={props.data[0].name} /> : <p>Loading image...</p> }
        // </div>

        // BOOTSTRAP CARD EXAMPLE
        <div className="card bg-light">
            { (props.data.length !== 0) ? 
                <img src={props.data[0].sprites.other.dream_world.front_default} alt={props.data[0].name} className="card-img-top" /> : 
                <p>Loading image...</p> 
            }
            <div className="card-body">
                { (props.data.length !== 0) ? <h5 className="card-title text-center">{props.data[0].name}</h5> : <p>Loading name...</p> }
            </div>
        </div>
    );
}

export default Pokemon;