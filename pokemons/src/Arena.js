
import React from "react";
import styled from "styled-components";
import PokemonCard3 from "./PokemonCard3";

const ButtonStyle = styled.button`
font-family:  sans-serif;
background-color: #2a75bb;
  border-radius: #2a75bb;
border: 1px solid ;
font-size: medium;
padding: 8px;
margin: 1px;
border-radius: 10px;
`

function Arena({arena}) {
    return (
      <div>
      <div>
      {arena?.map(id  => 
        <PokemonCard3 id={id}/>
      )}
    </div>
    <ButtonStyle disabled={arena.length <= 1}>Walcz</ButtonStyle>
    </div>
  );
}

  
  export default Arena;