const input = document.querySelector('#input');
input.addEventListener('change', event => generateGrid(event.target.value));

function generateGrid(number) {
    console.log('entered generateGrid');
    clearGrid();
    let grid = document.querySelector('#grid');

    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < number; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${Math.floor(1048/number)}px`;
            cell.style.height = `${Math.floor(1048/number)}px`;
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

function clearGrid() {
    console.log('entered clearGrid');
    let grid = document.querySelector('#grid');
    let child = grid.lastElementChild;

    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}