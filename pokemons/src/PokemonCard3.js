import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import { Button, TextField } from "@mui/material";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleButton = styled.button`
font-family:  sans-serif;
  background-color: #2a75bb;
    border-radius: #2a75bb;
  border: 1px solid ;
  font-size: medium;
  padding: 8px;
  margin: 20px;
  border-radius: 10px;
  display: flex;
}
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
const BetterPokemonRectangle = styled(TextField)`
  background-color: ${props => (props.isBetterPokemon ? "#00FF00" : "none")};
`;

function PokemonCard3({ id}) {
    const [state, setState] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    const onRemove = () => {
        setState(pokemonList.filter((pokemon) => pokemon.id !== id));
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
    }, [id]);


    console.log(state)

    if (!state) return null;
    return (
        <Background>
            <StyleCard>
                <StyleButton onClick={onRemove}>Remove</StyleButton>
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
                <div>
                    <div className="name">{state?.stats && state?.stats[0]?.base_stat}</div>
                    <div className="stat">Stat</div>
                </div>

            </StyleCard>
            <BetterPokemonRectangle isBetterPokemon={state.isBetterPokemon}>
</BetterPokemonRectangle>
        </Background>
    );
}

export default PokemonCard3;