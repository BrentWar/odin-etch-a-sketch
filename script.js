//add a row of 8 then another then another till 8 rows
let container = document.querySelector(".container");
let column = [];
let grid = new Array(8);
for (let i = 0; i < 8; ++i) {
    grid[i] = new Array(8);
}

for (let i = 0; i < 8; ++i) {
    column[i] = document.createElement("div");
    column[i].classList.add("column")
    container.appendChild(column[i]);
    for (let j = 0; j < 8; ++j) {

        grid[i][j] = document.createElement("div");
        grid[i][j].classList.add("square");
        column[i].appendChild(grid[i][j]);
    }
}