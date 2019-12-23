import React from 'React';
// 1. Uncomment this baseline `suspensify` function for communicating promise status to React
export function suspensify(promise) {
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
      if (status === "pending") return result;
      if (status === "error") throw result;
      if (status === "success") return result;
    }
  };
}

export function fetchPokemon(id){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
  res.json()
  );
}