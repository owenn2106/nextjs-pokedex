import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "./utility";

import styles from "../styles/Card.module.css";

const PokemonCard = ({ name, apiLink }) => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const typeList = pokemonTypes.map((obj) => {
    return obj.type.name;
  });

  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  const fetchPokemonDetail = () => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setPokemonTypes(data.types);
      });
  };

  return (
    <div className={styles.pokemon_card}>
      <h3>{capitalizeFirstLetter(name)}</h3>
      <p>Type(s): {typeList.join(", ")}</p>
    </div>
  );
};

export default PokemonCard;
