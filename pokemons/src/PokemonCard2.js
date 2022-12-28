import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";


function PokemonCard2({ id }) {
  const [state, setState] = useState([]);


  useEffect(() => {
    const getCharacters = async () => {
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setState(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    getCharacters();
  },[]);

console.log(state)

  if (!state) return null;
  return (
    <div>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div>{state?.name}</div>
      <div >{state?.height}</div>
      <div className="titles">Height</div>
      <div>{state?.weight}</div>
      <div className="titles">Weight</div>
      <div className="right"></div>
      <div>{state?.base_experience}</div>
      <div className="titles">Base experience</div>
      <div>
        {state?.abilities && state?.abilities[0]?.ability?.name}
      </div>
      <div className="titles">Ability</div>
    </div>
  );
}

export default PokemonCard2;

