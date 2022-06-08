let hover = false;
let currentColor = 'black';


const input = document.querySelector('#input');
input.addEventListener('change', event => generateGrid(event.target.value));

window.addEventListener('mousedown', () => hover = true);
window.addEventListener('mouseup', () => hover = false);

const color = document.querySelector('#color');
color.addEventListener('change', event => changeColor(event.target.value));

let grid = document.querySelector('#grid');
grid.addEventListener('mouseover', event => colorCell(event.target));
generateGrid(16);

function changeColor(color) {
    currentColor = color;
}

function colorCell(cell) {
    if (hover === false) {
        return;
    }
    cell.style.backgroundColor = currentColor;
}

function generateGrid(number) {
    console.log('entered generateGrid');
    clearGrid();

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
    let child = grid.lastElementChild;

    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}