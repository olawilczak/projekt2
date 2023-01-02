
import React from "react";
import styled from "styled-components";
import PokemonCard3 from "./PokemonCard3";

const BackGround = styled.div `
background: linear-gradient(to bottom right,#024,#402);
display: flex;
flex-direction: column;
`


const ButtonStyle = styled.button`
font-family:  sans-serif;
background-color: #2a75bb;
  border-radius: #2a75bb;
border: 1px solid ;
font-size: medium;
padding: 8px;
margin: 1px;
border-radius: 10px;
display: flex;
justify-content: center;
`

function Arena({ arena }) {
  
  return (
    <BackGround>

      <div>

        {arena?.map(id =>
          <PokemonCard3 id={id} />
        )}
      </div>

      <ButtonStyle  disabled={arena.length <= 1}>Walcz</ButtonStyle>
    </BackGround>
  );
}


export default Arena;