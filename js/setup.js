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
            cell.className = 'cell';
            cell.id = 'cell' + '-' + i + j;
            container[0].appendChild(cell);
        }
    }
}

function setTheme() {
    const colorActual = document.body.style.backgroundColor;
    const img = document.querySelector('img');
    // remove the src attribute and value
    img.removeAttribute('src');
    if (colorActual == "white") {
        document.body.style.backgroundColor = "#121212";
        img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAmdJREFUaEPtWOExhEEMfVcBKlACKqAEKkAFqAAVoAJUQAfogApQASpg3sxmJrPzfZvduVycz2bmfty3e0le3vuy2ZthojabKC50YAVmzwCcpvVzAPz+6+bBWAcWSWMNYwcAbpykaPlyw24BI6D9BOxwJOoOAH5oj+kztLXGVwgwVvdaRWJiY+CshASU7KOfkgosf+Z6LWPzJJQX6BYAny3ULGAMLtUeSmgVwDaAzZTlM4AnAJ9Z1iUfCwFYA4yB85eegC4KlSeQkwxgWONgwrXAdFXJzgMAgivZG4A9AGQx3FqBEcxrBupFdUJ2xw2FguC2BqS5cKCtwHR3+0pSvM+y3E3v5Up6HtIs8kq1ACNbH8oBZZaDkmWCu1N716JZy4Fx7vtWCbHD8dCl6WQpP+mEY7LiuyWy1EWgXNlJtXF4drUcmAbFQHpa18PuFYBjI5NLAEdpz5gfcdGinKoC/Btg+V1Kz35aipQZu13JSlKU2VJ+736Ha5HAn24eln51u+fYxGF2qN1zeJYDfOnbPUEzWR66ckbxGSUnnZMS093yPX3PZ0ergHOvt0hRgjFxsrRuRCcovpdLPVINDcFs57yEDhnlx+NAM7V0Q3Dp5ktpavmJLMeuLfNcVpvkaUnR4+breROvBlcC5nnz9ShQNShurGWs1LL17KdnyzyR0Fu0BYzJWS99yx+mlq8mVkqba4BZwVqAWb7c1juwQikny5ibfDwdeUjRMx83Xx2YWymDHHXGggrtFqYz5lbKIEedsaBCu4XpjLmVMshRZyyo0G5hOmNupQxy1BkLKrRbmM6YWymDHE2WsR+Qa4c3Lf7SawAAAABJRU5ErkJggg==');
    } else {
        document.body.style.backgroundColor = "white";
        img.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAAgxJREFUaEPtmeExBEEQhd9FgAiQAREgAkSACBABIhACIuAiIAMyQASIgHpVO1VbU7O7Parf7uzVzB9/Ztt8/bp7uucWWNG1WFEuVLCWslsADgEcA9gvVfEcxQhxDuCogXkAcDp3sGsAVxHEGYD7uYKtA3jsCLltAB9zBCPUKwDmVGrlhPHo/H2HewGw13OiWYKlcipmnB0YQ+/dEDuzA2OlOzGA8R57MuybZEvsdRaML+NJlq07zfjJeNtiMF6+LO/WVWzJj8GsYRjAbwCw0BS3YrChEp8CKDLXYrBvAGuZ7uc3u6V1ITHYbyZU2P4G4AAAIYtYXmCEKQrOI8faClEx5hxzddLlDRZgeHFfGvOOnY77lBCDXQC4dXQ1w5OQsYIcWneacYgOcJ/rYjBrn+jIjg1F0Uk1sgyLTc+T99iStWUpMIbJ80hgsueFrtHjPx1Iri9kavEgXWBMbMLldiFWuM+meMgu9L5hURmSbMFYMWVraArmu+Gd83+X5VX7nENg3OsVlj/NvSVVKsBZwLiX9xvnLsuTQUpgvhrze/cOoyuarGDh+wDISXuosFAhdh2jAuUqlnIMi0v4UYLhGjp8/mVFnbQRzlXMuY7ozFUwnW81lqtiGr/qrFbFdL7VWK6Kafyqs1oV0/lWY7kqpvGrzmpVTOdbjeWqmMavOqtVMZ1vNZarYhq/6qz+AThRRjczJ90ZAAAAAElFTkSuQmCC');
    }
}
