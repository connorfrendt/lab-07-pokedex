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
const spdefMinInput = document.getElementById('filter-min-spdef');
const spdefMaxInput = document.getElementById('filter-max-spdef');


const pokedexFilter = {
    init(onFilter) {
        nameInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        typeInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });

        hpMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        hpMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });

        atkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        atkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });

        defMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        defMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });

        spatkMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        spatkMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });

        spdefMinInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
        
        spdefMaxInput.addEventListener('keyup', function() {
            onFilter(nameInput.value, typeInput.value,
                hpMinInput.value, hpMaxInput.value,
                atkMinInput.value, atkMaxInput.value,
                defMinInput.value, defMaxInput.value,
                spatkMinInput.value, spatkMaxInput.value,
                spdefMinInput.value, spdefMaxInput.value);
        });
    }
};

export default pokedexFilter;