import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red, yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import styled from "styled-components";

const LinkStyle = styled(Link)`
text-decoration: none
`

function PokemonCard({ name, url, favorites, setFavorites, arena, setArena }) {
  const [state, setState] = useState([]);


  const getCharacters = async () => {
    try {
      const result = await axios.get(url);
      setState(result.data);
      console.log(state);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCharacters();
  }, [url]);

  const toggleFavorite = () => {
    setFavorites((prev) => prev.includes(state.id) ? prev.filter((favorite) => favorite !== state.id) : [...prev, state.id])
  };

  console.log(favorites)

  const toggleArena = () => {
    setArena((prev) => prev.includes(state.id) ? prev.filter((star) => star !== state.id) : [...prev, state.id])
  };
  
  if (arena.length>2) {
    arena.splice(2)
  }

console.log(arena)
console.log(state)

console.log('stateincard', state)

  if (!state) return null;
  return (
    <div>
      <LinkStyle to={`/pokemon/${state.id}`}>
      <img className="img" src={state?.sprites?.front_default} />
      <div className="card-card"></div>
      <div className="left"></div>
      <div className="name">{name}</div>
      <div className="height">{state.height}</div>
      <div className="titles">Height</div>
      <div className="weight">{state.weight}</div>
      <div className="titles">Weight</div>
      <div className="right"></div>
      <div className="experience">{state.base_experience}</div>
      <div className="titles">Base experience</div>
      <div className="ability">
        {state?.abilities && state?.abilities[0]?.ability?.name}
      </div>
      <div className="titles">Ability</div>
      </LinkStyle>
      <div>
      {favorites.includes(state.id) ? (
        <FavoriteIcon sx={{color: red[500]}} onClick={toggleFavorite} />
      ) : (
        <FavoriteBorderIcon sx={{color: red[500]}} onClick={toggleFavorite} />
      )}
      </div>
      <div>
      {arena.includes(state.id) ? (
        <GradeIcon sx={{color: yellow[500]}} onClick={toggleArena} />
      ) : (
        <GradeOutlinedIcon sx={{color: yellow[500]}} onClick={toggleArena} />
      )}
      </div>
    </div>
  );
}

export default PokemonCard;
