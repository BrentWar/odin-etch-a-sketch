//add a row of 8 then another then another till 8 rows
let size = 8;
let container = document.querySelector(".container");
let column = [];
let grid = new Array(size);
for (let i = 0; i < size; ++i) {
    grid[i] = new Array(size);
}
resize();


function resize() {

    grid = new Array(size);
    for (let i = 0; i < size; ++i) {
        grid[i] = new Array(size);
    }

    for (let i = 0; i < size; ++i) {
        column[i] = document.createElement("div");
        column[i].classList.add("column")
        container.appendChild(column[i]);
        for (let j = 0; j < size; ++j) {

            grid[i][j] = document.createElement("div");
            grid[i][j].classList.add("square");
            grid[i][j].addEventListener("mouseenter", function () {
                grid[i][j].classList.add("changeColor");
            })
            column[i].appendChild(grid[i][j]);
        }
    }
}

function deleteGrid() {
    for (let i = 0; i < size; ++i) {
        for (let j = 0; j < size; ++j) {
            column[i].removeChild(grid[i][j]);
        }
        container.removeChild(column[i]);
    }
}

let sizeChange = document.querySelector(".sizeChange");
sizeChange.addEventListener("click", function () {
    deleteGrid();
    size = prompt("New grid size?", "1-100");
    if (size > 100) {
        size = 100;
    }
    resize();
})

