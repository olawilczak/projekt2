import React from "react";
import PokemonCard2 from "./PokemonCard2";
import styled from "styled-components";

const BackGround = styled.div `
background: linear-gradient(to bottom right,#024,#402);
display: flex;
flex-direction: column;
`

function Favourities({favorites}) {
  return (
    <BackGround>
      {favorites.map(id  => 
        <PokemonCard2 id={id}/>
      )}
    </BackGround>
   
  );
}

export default Favourities;