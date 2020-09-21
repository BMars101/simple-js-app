let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "weedle",
      height: 1,
      type: ["bug", "poison"],
    },
    {
      name: "ivysaur",
      height: 3,
      type: ["grass", "poison"],
    },
    {
      name: "butterfree",
      height: 3,
      type: ["bug", "flying"],
    },
  ];

  function myPokeList(pokemon) {
    console.log(
      pokemon.name +
        " has a height of: " +
        pokemon.height +
        " and type of: " +
        pokemon.type
    );
  }

  pokemonList.forEach(myPokeList);

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.add({ name: "Venusaur" });
console.log(pokemonRepository.getAll());
