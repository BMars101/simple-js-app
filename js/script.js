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

  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  function getAll() {
    return list;
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
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
  pokemonRepository.addListItem(pokemon);
});
