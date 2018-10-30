import pokedexApi from './pokedex-api.js';
import pokedexTable from './pokedex-table.js';

const pokemons = pokedexApi.getAll();

pokedexTable.init(pokemons);