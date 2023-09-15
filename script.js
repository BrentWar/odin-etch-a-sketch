
let size = 8;
let choice = "Normal";
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
                let rgb = window.getComputedStyle(grid[i][j]).getPropertyValue("background-color");
                let sep = rgb.indexOf(",") > -1 ? "," : " ";
                rgb = rgb.substring(4).split(")")[0].split(sep);
                
                let r = "",
                g = "",
                b = "";
                if (+rgb[0] - 29 <= 0) {
                    r = "0";
                    g = "0";
                    b = "0";
                } else {
                    r = (+rgb[0]).toString(10) - 29;
                    g = (+rgb[1]).toString(10) - 29;
                    b = (+rgb[2]).toString(10) - 29;
                }

                r = r.toString(16);
                g = g.toString(16);
                b = b.toString(16);

                if (r.length == 1)
                    r = "0" + r;
                if (g.length == 1)
                    g = "0" + g;
                if (b.length == 1)
                    b = "0" + b;

                grid[i][j].style.backgroundColor = "#" + r + g + b;

                
            })
            column[i].appendChild(grid[i][j]);

            /*
            grid[i][j].addEventListener("mouseenter", function () {
                grid[i][j].style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
            })
            column[i].appendChild(grid[i][j]);
            /*
            /*
            grid[i][j].addEventListener("mouseenter", function () {
                grid[i][j].classList.add("changeColor");
            })
            column[i].appendChild(grid[i][j]);
            */
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


