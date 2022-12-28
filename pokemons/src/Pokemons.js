import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PokemonCard from "./PokemonCard";
import { TextField } from "@mui/material";
import "./Pokemons.css";
import { Link } from "react-router-dom";
import PokemonDetails from "./PokemonsDetails";


function Pokemons({favorites, setFavorites, arena, setArena}) {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  const [newPokemons, setNewPokemons] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [totalPages, setTotalPages] = useState(0);
  const [prevP, setPrevP] = useState('')
  const [nextP, setNextP] = useState('')
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0'
  )

  // const handlePageChange = (direction) => {
  //   if (direction === "prev" && currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   } else if (direction === "next" && currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  const onPrevPage = () => {
    setUrl(prevP)
  }
  const onNextPage = () => {
    setUrl(nextP)
  }
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const result = await axios.get(
          url)
        setState(result.data.results);
        // setTotalPages(Math.ceil(result.data.count / 15));
        setPrevP(result.data.previous)
        setNextP(result.data.next)
      } catch (e) {
        console.error(e);
      }
    };
    getCharacters();
  }, []);

  console.log(state)
  console.log('prev', prevP)

  useEffect(() => {
    if (state) {
      const filteredPokemons = state?.filter((item) =>
        item.name.includes(query.toLowerCase())
      );
      setNewPokemons(filteredPokemons);
    }
  }, [query.length]);

  console.log(newPokemons)

  return (
    <>
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={query}
          onChange={(a) => setQuery(a.target.value)}
        />
      </div>
      <div>
        <Card>
          <CardActionArea>
            <CardMedia />
            <CardContent sx={{ padding: 0 }}>
              <Typography
                className="Pokemons"
                gutterBottom
                variant="h5"
                component="div"
              >
                {query.length > 0 ? newPokemons?.map((b) => {
                  return (
                    <div className="card">
                      <PokemonCard
                        name={b.name[0].toUpperCase() + b.name.substring(1)}
                        url={b.url}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        arena={setArena}
                        setArena={setArena}
                      />
                    </div>
                  )
                }) : state?.map((b) => {
                  return (
                    <div className="card">
                      <PokemonCard
                        name={b.name[0].toUpperCase() + b.name.substring(1)}
                        url={b.url}
                      favorites={favorites}
                      setFavorites={setFavorites}
                      arena={arena}
                      setArena={setArena}
                      />
                    </div>
                  )
                })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div>
          <button className="button" onClick={onPrevPage}>Poprzednia strona</button>
          <button className="button" onClick={onNextPage}>Następna strona</button>
        </div>
      </div>
    </>
  );
}
export default Pokemons;
