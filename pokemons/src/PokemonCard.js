import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonCard.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red, yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import Favourities from "./Favourities";

function PokemonCard({ name, url }) {
  const [state, setState] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [arena, setArena] = useState([]);


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
  }, []);

  const toggleFavorite = () => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(favorite => favorite !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  console.log(favorites)

  const toggleArena = () => {
    if (arena.length < 2) {  
      if (arena.includes(name)) {
        setArena(arena.filter(pokemon => pokemon !== name));
      } else {
        setArena([...arena, name])
      }
    } else if (arena.length === 2) {  
      setArena([...arena.slice(1), name]); 
    }
  }



  if (!state) return null;
  return (
    <div>
      <Link to="/pokemonsdetails">
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
      </Link>
      <div>
      {favorites.includes(name) ? (
        <FavoriteIcon sx={{color: red[500]}} onClick={toggleFavorite} />
      ) : (
        <FavoriteBorderIcon sx={{color: red[500]}} onClick={toggleFavorite} />
      )}
      </div>
      <div>
      {arena.includes(name) ? (
        <GradeIcon sx={{color: yellow[500]}} onClick={toggleArena} />
      ) : (
        <GradeOutlinedIcon sx={{color: yellow[500]}} onClick={toggleArena} />
      )}
      </div>
    </div>
  );
}

export default PokemonCard;
