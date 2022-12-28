import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red, yellow } from "@mui/material/colors";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import Favourities from "./Favourities";

function PokemonCard2({ name, url, id }) {
  const [state, setState] = useState([]);


  useEffect(() => {
    const getCharacters = async () => {
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setState(result.data.results);
      } catch (e) {
        console.error(e);
      }
    };
    getCharacters();
  });



  if (!state) return null;
  return (
    <div>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div className="name">{name}</div>
      <div className="height">{state?.height}</div>
      <div className="titles">Height</div>
      <div className="weight">{state?.weight}</div>
      <div className="titles">Weight</div>
      <div className="right"></div>
      <div className="experience">{state?.base_experience}</div>
      <div className="titles">Base experience</div>
      <div className="ability">
        {state?.abilities && state?.abilities[0]?.ability?.name}
      </div>
      <div className="titles">Ability</div>
    </div>
  );
}

export default PokemonCard2;

