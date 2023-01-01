import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "./Logo";
import Favourities from "./Favourities";
import Login from "./Login";
import Registration from "./Registration/Registration";
import Edition from "./Edition";
import LogOut from "./LogOut";
import Arena from "./Arena";
import Pokemons from "./Pokemons";
import FormulaLogo from "./FormulaLogo";
import Formula from "./Registration/Formula";
import PokemonsDetails from "./PokemonsDetails"
import FavouritiesButton from "./FavouritiesButton";
import React, { useState, useEffect } from "react";
import ArenaButton from "./ArenaButton";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [arena, setArena] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="Menu">
                <div className="App-navigation">
                  <Logo />
                  <link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet"></link>
                </div>
                <div className="App-buttons">
                  <Link to="/favourities">
                    <FavouritiesButton />
                  </Link>
                  <Link to="/arena">
                    <ArenaButton />
                  </Link>
                  <Link to="/formulalogo">
                    <Login />
                  </Link>
                  <Link to="/registration">
                    <Registration />
                  </Link>
                  <Link to="/edition">
                    <Edition />
                  </Link>
                  <Link to="/logout">
                    <LogOut />
                  </Link>
                </div>
              </div>
              <div className="App-pokemons">
                <Pokemons favorites={favorites} setFavorites={setFavorites} arena={arena} setArena={setArena}/>  
              </div>
            </div>
          }
        />
        <Route path="favourities" element={<Favourities favorites={favorites}/>}></Route>
        <Route path="arena" element={<Arena arena={arena}/>}></Route>
        <Route path="formulalogo" element={<FormulaLogo/>}></Route>
        <Route path="registration" element={<Formula/>}></Route>
        <Route path="/pokemon/:pokemon" element={<PokemonsDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
