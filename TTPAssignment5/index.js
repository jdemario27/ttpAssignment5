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
