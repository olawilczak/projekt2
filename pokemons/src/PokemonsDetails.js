import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LinkStyle = styled(Link)`
  text-decoration: none;
  font-family:  sans-serif;
  background-color: #2a75bb;
  border-radius: #2a75bb;
  border: 1px solid ;
  font-size: medium;
  padding: 8px;
  margin: 1px;
  border-radius: 10px;
`

function PokemonsDetails() {
  const [state, setState] = useState([]);
  
  const { pokemon } = useParams();

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        setState(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    getCharacters();
  }, [pokemon]);

  console.log(state)

  console.log(pokemon)


  const handleClick = () => {
    window.location.href = '/';
  };

  if (!state) return null;
  return (
    <div>
      <div>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div>{state.name}</div>
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
      <LinkStyle to="/" onClick={handleClick}>Strona główna</LinkStyle>
    </div>
  )
}
export default PokemonsDetails;