const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');

const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value);
        });
    }
};

export default pokedexFilter;