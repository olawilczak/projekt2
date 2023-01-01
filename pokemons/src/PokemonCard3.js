import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyleButton = styled.button`
font-family:  sans-serif;
  background-color: #2a75bb;
    border-radius: #2a75bb;
  border: 1px solid ;
  font-size: medium;
  padding: 8px;
  margin: 1px;
  border-radius: 10px;
}
`


function PokemonCard3({ id }) {
  const [state, setState] = useState([]);

  const onRemove = async () => {
    try {
      await axios.delete(`https://pokeapi.co/api/v2/pokemon/${id}`);
      onRemove();
    } catch (e) {
      console.error(e);
    }
  };


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
  },[id]);

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
      <div>
        <div>{state?.stats && state?.stats[0]?.base_stat}</div>
      </div>
      <StyleButton onClick={onRemove}>Remove</StyleButton>
    </div>
  );
}

export default PokemonCard3;