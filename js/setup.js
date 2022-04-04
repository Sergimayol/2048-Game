function createGrid() {
    var container = document.getElementsByClassName('grid-container');
    const n = 16;
    for (let i = 0; i < n; i++) {
        var row = document.createElement('div');
        row.className = 'grid-cell';
        container[0].appendChild(row);
    }
}

