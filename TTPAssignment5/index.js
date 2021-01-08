let amountofRows = 1;
let amountofColumns = 2;
//add rows to the grid
function addRow() {
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < amountofColumns; i++) {
        let cell = document.createElement("td");
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

//clicking on a cell changes the color to the selected color
let currentColor = `${document.getElementById("color-list").value}`
//change colors for only the two inital cells
let cells = document.getElementsByTagName("td");
let cellList = [...cells];
// changes color of a cell
function changeColor() {
    this.style.backgroundColor = currentColor;
}
// sets currentColor based on the color selected from dropdown
function setCurrentColor(color) {
    currentColor = color;
}
for (let i=0; i < cellList.length; i++) {
    cellList[i].addEventListener("click", changeColor);
}