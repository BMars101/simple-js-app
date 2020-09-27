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

let pokemonRepository = (function () {
  let list = [];

  function add(pokemon) {
    list.push(pokemon);
  }

  function myPokeList(pokemon) {
    console.log(
      pokemon.name +
        " has a height of: " +
        pokemon.height +
        " and type of: " +
        pokemon.type
    );
  }

  function getAll() {
    return list;
  }

  return {
    add: add,
    myPokeList: myPokeList,
    getAll: getAll,
  };
})();
//add external pokemonList to IIFE pokemonRepository
pokemonList.forEach(function (pokemon) {
  pokemonRepository.add(pokemon);
});
//create new variable and assign value of pokemonRepository
let allPokemon = pokemonRepository.getAll();
//display list
console.log("my initial pokemon list: ", allPokemon);
//create new pokemon item
let newPokemon = {
  name: "venusaur",
  height: 6,
  type: ["poison", "grass"],
};
//add new pokemon to list
pokemonRepository.add(newPokemon);
console.log("my new pokemon list: ", allPokemon);
//print list with item details with forEach function
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.myPokeList(pokemon);
});
