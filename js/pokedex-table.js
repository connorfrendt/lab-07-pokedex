import html from './html.js';

const tableBody = document.getElementById('pokedex-body');

function makeRow(pokemon) {
    return html`<tr>
        <td style="background-color: ${pokemon.color_1}">${pokemon.pokemon}</td>
        <td style="background-color: red">${pokemon.hp}</td>
        <td class="${pokemon.type_1}"></td>
        <td>${pokemon.type_2}</td>
    </tr>`;
}

const pokedexTable = {
    init(pokemons) {
        for(let i = 0; i < pokemons.length; i++) {
            const tr = makeRow(pokemons[i]);
            tableBody.appendChild(tr);
        }
    }
}

export default pokedexTable