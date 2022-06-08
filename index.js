function generateGrid(number) {

    let grid = document.querySelector('grid');

    for (let i = 0; i < number; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let i = 0; i < number; i++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}