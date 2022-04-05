function createGrid() {
    var container = document.getElementsByClassName('grid-container');
    const n = 16;
    for (let i = 0; i < n; i++) {
        var row = document.createElement('div');
        row.className = 'grid-cell';
        container[0].appendChild(row);
    }
}

function createGridLayout() {
    var container = document.getElementsByClassName('grid-container');
    const n = 4;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            var cell = document.createElement('div');
            cell.className = 'grid-cell' + ' ' + i + j;
            container[0].appendChild(cell);
        }
    }
}
