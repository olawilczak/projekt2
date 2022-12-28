import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function PokemonsDetails() {
  const handleClick = () => {
    window.location.href = '/';
  };
return (
  <Link text-decoration="none" to="/" onClick={handleClick} className="button">Strona główna</Link>
)
}
export default PokemonsDetails;