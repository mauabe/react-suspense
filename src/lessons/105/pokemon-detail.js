import React from "react";
import {fetchPokemon, suspensify} from './api';


let initialPokemon = suspensify(fetchPokemon(1));

export default function PokemonDetail() {
  let[pokemonResource, setPokemonResource] =  React.useState(initialPokemon)
  let pokemon = pokemonResource.read();

return <div>
  {pokemon.name}{" "}
  <button
    type="button"
    onClick={() => setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)))}
  >
    Next
  </button>
  </div>
  let status = "pending";
  let result;
  let suspender = promise.then(
    response => {
      status = "success";
      result = response;
    },
    error => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      if (status === "success") return result;
    }
  };
}

// 2. Rename the `pokemon` variable to `initialPokemon` to indicate that it is only the first
let pokemon = suspensify(
  fetch(`https://pokeapi.co/api/v2/pokemon/1`).then(res => res.json())
);

// export default function PokemonDetail() {
//   // 1. Use React.useState to track the current PokemonResource and setPokemonResource
//   // 2. (see above)
//   // 3. Provide `initialPokemon` to `React.useState` as default
//   // 4. Create an intermediate `pokemon` variable that `read()`s the `pokemonResource`
//   // 5. Create "Next" button
//   //  * When clicked, call `setPokemonResource`
//   //  * Use suspensify(fetchPokemon(...)) to fetch the pokemon with the next id
//   return <div>{pokemon.read().name}</div>;
}
