import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
            { (props.data.length !== 0) ? <p>{props.data[0].name}</p> : <p>Loading name...</p> }
            { (props.data.length !== 0) ? <img src={props.data[0].sprites.front_default} alt={props.data[0].name} /> : <p>Loading image...</p> }
        </div>
    );
}

export default Pokemon;