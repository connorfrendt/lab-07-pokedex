const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const hpMinInput = document.getElementById('filter-min-hp');

const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value, hpMinInput.value);
        });
    }
};

export default pokedexFilter;