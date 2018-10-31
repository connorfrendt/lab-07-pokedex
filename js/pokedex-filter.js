const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const hpMinInput = document.getElementById('filter-min-hp');
const hpMaxInput = document.getElementById('filter-max-hp');


const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value, hpMaxInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value, hpMaxInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value, hpMaxInput.value);
        });
        
        hpMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value, hpMaxInput.value);
        });
    }
};

export default pokedexFilter;