window.onload = function()
{
    findAndFillGrid();
    subscribeMyTiles();
    fillGetResults();
}

function fillGetResults() {
    let element = document.getElementById("form-result-container");

    let params = getUrlAsRequest();

    let keys = Object.keys(params);

    if (keys.length() == 0)
    {
        return;
    }

    keys.forEach(key => {
        element.innerHTML += `
        <div class="field">
            <div class="title">
                ${key}
            </div>
            ${params[key]}
        </div>`;
    })

}

function getUrlAsRequest() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return params;
}

function findAndFillGrid() {
    let grids = document.getElementsByClassName("grid");

    for (let i = 0; i < grids.length; i++) {
        let grid = grids.item(i);
        fillGrid(grid);
    }
}

function fillGrid(element) {

    for (let i = 0; i < 6; i++) {
        let row = '<div class="row">';

        for (let j = 0; j < 6; j++) {
            let number = i * 6 + j + 1;

            row += `<div class="${(number == 5 ? "my" : "other")} tile">${number}</div>`;
        }

        row += '</div>'

        element.innerHTML += row;
    }
}

function subscribeMyTiles() {
    let tiles = document.querySelectorAll(".tile.my");

    for (let i = 0; i < tiles.length; i++) {
        let tile = tiles.item(i);
        subscribeMyTile(tile);
    }
}

function subscribeMyTile(element) {
    element.addEventListener('mouseover', e => {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
    })

    // todo: palette

    element.addEventListener('dblclick', e => {
        let tiles = document.querySelectorAll(".tile.other");

        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles.item(i);
            tile.style.backgroundColor = getRandomColor();
            tile.style.color = getRandomColor();
        }
    })
}

function getRandomInt(maxValue)
{
    return Math.floor(Math.random() * maxValue);
}

function getRandomColor()
{
    const maxRandomValue = 255;

    let r = getRandomInt(maxRandomValue);
    let g = getRandomInt(maxRandomValue);
    let b = getRandomInt(maxRandomValue);

    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}