const nameInput = document.getElementById('filter-name');
const typeInput = document.getElementById('filter-type');
const hpMinInput = document.getElementById('filter-min-hp');
const hpMaxInput = document.getElementById('filter-max-hp');
const atkMinInput = document.getElementById('filter-min-atk');
const atkMaxInput = document.getElementById('filter-max-atk');
const defMinInput = document.getElementById('filter-min-def');
const defMaxInput = document.getElementById('filter-max-def');
const spatkMinInput = document.getElementById('filter-min-spatk');
const spatkMaxInput = document.getElementById('filter-max-spatk');


const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
        
        hpMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });

        atkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
        
        atkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });

        defMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
        
        defMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });

        spatkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
        
        spatkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value);
        });
    }
};

export default pokedexFilter;