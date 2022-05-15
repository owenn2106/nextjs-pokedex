import { useState, useEffect } from "react";

import PokemonCard from "./PokemonCard";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  };

  return (
    <div className="card-wrapper">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          apiLink={pokemon.url}
        />
      ))}
    </div>
  );
};

export default Pokemons;

// export async function getServerSideProps(context) {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
//   const result = await res.json();
//   const pokemons = await result.results;

//   return {
//     props: {
//       pokemons,
//     },
//   };
// }
