import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: wrap;
  
`

const StyleCard = styled.div`
width: 150px;
height: 300px;
margin: 10px;
padding: 70px;
border-radius: 20px;
border: 2px solid #ffdd56;
margin-bottom: 2.5rem;
background: none;
display: flex;
  flex-direction: column;
  justify-content: center;
 

`

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
    <Background>
    <StyleCard>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div className="name">{state?.name}</div>
      <div className="name" >{state?.height}</div>
      <div className="titles">Height</div>
      <div className="name">{state?.weight}</div>
      <div className="titles">Weight</div>
      <div className="right"></div>
      <div className="name">{state?.base_experience}</div>
      <div className="titles">Base experience</div>
      <div className="name">
        {state?.abilities && state?.abilities[0]?.ability?.name}
      </div>
      <div className="titles">Ability</div>
    </StyleCard>
    </Background>
  );
}

export default PokemonCard2;

