
const Pokemon = require('./Pokemon');

function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire'),
  ];
}

const pokemonOfAsh = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?
const chosenPokemon = pokemonOfAsh.filter((pokemon) => pokemon.isEffectiveAgainst(wildPokemon));

console.log(`I choose you, ${chosenPokemon[0].name}`);
