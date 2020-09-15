let pokemonList = [
  { name: "weedle", height: 1, type: ["bug, poison"] },
  { name: "ivysaur", height: 3, type: ["grass", "poison"] },
  { name: "butterfree", height: 3, type: ["bug", "flying"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 3) {
    document.write(
      pokemonList[i].name + "" + " (height: " + pokemonList[i].height + ") "
    );
  } else {
    document.write(
      pokemonList[i].name +
        "" +
        " (height: " +
        pokemonList[i].height +
        ")" +
        " -this one is smaller! "
    );
  }
}
