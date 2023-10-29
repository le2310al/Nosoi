const container = document.getElementById("container");
const path = document.getElementById("path");

function togglerules() {
  var x = document.getElementById("rules");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    var e = Math.random();
    if (e < 0.1){
      // Clearing 10% chance
      cell.innerText= ('#');
    }
    else if (e < 0.3){
      // Barrens 20% chance
      cell.innerText=('.');
    }
    else if (e < 0.5){
      // Field 20% chance
      cell.innerText= (',');
    }
    else if (e < 0.7){
      // Forest 20% chance
      cell.innerText= (';');
    }
    else if (e < 0.85){
      // Ruins 15% chance
      cell.innerText= ('R');
    }
    else{
      // Caves 15% chance
      cell.innerText= ('C');
    }
    container.appendChild(cell)
    cell.id = 'c' + c;
    cell.hidden = true;
  };
};
makeRows(16, 16);


function makeRows2(rows, cols) {
  path.style.setProperty('--pgrid-rows', rows);
  path.style.setProperty('--pgrid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let step = document.createElement("div");
    path.appendChild(step).className="grid-item2"
    step.id = 's' + i;
  };
};
makeRows2(16, 16);

var avatar = '@';

const position=s7;

position.innerText=avatar;
position.body.style.background = grey;

position.hidden = false;