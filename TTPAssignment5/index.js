let amountofRows = 1;
let amountofColumns = 2;
//used for hovering over the grid with your mouse to color
let coloring = false;
//add rows to the grid
function addRow() {
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }
    grid.appendChild(newRow);
    amountofRows++;
}

//add columns to the grid 
function addColumn() {
    let grid = document.getElementById("grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
       let cell = document.createElement("td");
       initializeCell(cell)
       allRows[rowCounter].appendChild(cell);
       rowCounter++;
    }

    amountofColumns++;
  }
   
//remove rows from the grid
function removeRow() {
    let mainGrid = document.getElementById("grid");
    mainGrid.deleteRow(amountofRows-1);
    amountofRows--;
}

//remove columns from the grid 
function removeColumn() {
    let grid = document.getElementById("grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < amountofRows; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;
    }
    amountofColumns--;
} 

//click on a single cell, changing its color to the currently selected color
let currentColor = `${document.getElementById("color-list").value}`

function initializeCell(cell) {
    cell.addEventListener("click", changeColor);
    cell.classList.add("uncolored");

    cell.addEventListener("mousedown", e => {
        coloring = true
    });
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}

let cells = document.getElementsByTagName("td");
let cellList = [...cells];
for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}

//changes color of the cell
function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored")
}
function setCurrentColor(color) {
    currentColor = color;
}
for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    cell.addEventListener("click", changeColor);
    cell.classList.add("uncolored");
}

//fill all uncolored cells with the currently selected color 
function setUncolored() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];

    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });
    uncolored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}  

//fill all cells with the currently selected color
function setAllCells() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
} 

//clear all cells/restore all cells to their original/initial color
function clearAllCells() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'lime';
        cell.classList.add("uncolored");
    })
}     