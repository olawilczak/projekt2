import React from "react";
import PokemonCard2 from "./PokemonCard2";


function Favourities({favorites}) {
  return (
    <div>
      {favorites.map(id  => 
        <PokemonCard2 id={id}/>
      )}
    </div>
   
  );
}

export default Favourities;