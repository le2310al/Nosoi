const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    var e = Math.random();
    if (e < 0.1{
      cell.innerText= ('#');
    }
    else if (e < 0.3{
      cell.innerText=('.')
    }
    else if (e < 0.5
      cell.innerText= (',')
    }
    else{
      cell.innerText= ('V');
    }
    container.appendChild(cell).className = "grid-item";
  };
};
makeRows(16, 16);