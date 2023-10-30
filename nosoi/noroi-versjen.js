const map = document.getElementById("map");
const path = document.getElementById("path");
const inv = document.getElementById("inventory");
const temptext = document.getElementById("temptext");
const tempdiv = document.getElementById("tempdiv");
const fighttext = document.getElementById("fighttext");
const fightdiv = document.getElementById("fight");
const fightbuttontea = document.getElementById("fightbuttontea");
const fightbuttonblade = document.getElementById("fightbuttonblade");

function makeRows(rows, cols) {
  map.style.setProperty('--grid-rows', rows);
  map.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    var e = Math.random();
    if (e < 0.1){
      // Clearing 10% chance
      cell.innerText= ('○');
      cell.style.color = 'SeaGreen';
    }
    else if (e < 0.3){
      // Barrens 20% chance
      cell.innerText=('⥎');
      cell.style.color = 'Sienna';
    }
    else if (e < 0.5){
      // Field 20% chance
      cell.innerText= ('▩');
      cell.style.color = 'LightGreen';
    }
    else if (e < 0.7){
      // Forest 20% chance
      cell.innerText= ('♣');
      cell.style.color = 'ForestGreen';
    }
    else if (e < 0.85){
      // Ruins 15% chance
      cell.innerText= ('⌂');
      cell.style.color = 'Peru';
    }
    else{
      // Caves 15% chance
      cell.innerText= ('\ue2a6');
      cell.style.color = 'Maroon';
    }
    map.appendChild(cell)
    cell.id = 'c' + c;
    cell.hidden = false;
  };
};
makeRows(16, 16);

function makeRows2(rows, cols) {
  path.style.setProperty('--grid-rows', rows);
  path.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let step = document.createElement("div");
    path.appendChild(step).className="grid-item2";
    step.id = 's' + i;
  };
};
makeRows2(16, 16);

var avatar = '@';
const position=s7;
position.innerText=avatar;

var playerhp = 10;
var monsterhp = 10;

inv.innerText = "Inventory\n ---------------------------------\n";
inv.appendChild(document.createTextNode("Hope\n"));
//inv.appendChild(document.createTextNode("Shard of Sorrow\n"));
//inv.appendChild(document.createTextNode("Die of Disease\n"));
//inv.appendChild(document.createTextNode("Vial of Vice\n"));
//inv.appendChild(document.createTextNode("Veil of Violence\n"));
//inv.appendChild(document.createTextNode("Mask of Madness\n"));

function togglehide(divname) {
  var x = document.getElementById(divname);
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
  }
} 

function event(){
temptext.textContent ="Event text here";
tempdiv.style.display = "block";
inv.appendChild(document.createTextNode("Itemname\n"))
}

function eventTeaSet(){
temptext.textContent ="As you enter the cave you discover an old hermit standing over a bubbling pot. She offers you some 'tea'. \n\nAs you finish and turn to leave she pushes a warm clay pot into your hands.";
tempdiv.style.display = "block";
inv.appendChild(document.createTextNode("Hermit's an-Tea-contamination Set\n"));
fightbuttontea.style.display = "inline-block";
}


function eventWep1(){
temptext.textContent ="As the sun sets you notice a gleam from the ashes of the ruins.";
tempdiv.style.display = "block";
inv.appendChild(document.createTextNode("Rusty Blade\n"));
fightbuttonblade.style.display = "inline-block";
}

function excavate() {
    var e = Math.random();
    if (e < 0.1){
        inv.appendChild(document.createTextNode("Item\n"));
    }
}

function setmonsterhp(){
  monsterhp = 10;
}

function fightmonster(){
  setmonsterhp();
  fighttext.textContent = "A contaminated creature attacks!\n What will you do?";
  fightdiv.style.display = "block";
}

function slap(){
  monsterhp -= 1;
  fighttext.textContent = "Slap!";
  if (monsterhp <1){
    window.alert("Monster defeated!");
    fightdiv.style.display = "none";
  }
}

function blade(){
  monsterhp -= 3;
  fighttext.textContent = "Bonk!";
  if (monsterhp <1){
    window.alert("Monster defeated!");
    fightdiv.style.display = "none";
  }
}

function tea(){
  fighttext.textContent = "What a lovely cuppa tea!";
  playerhp += 3;
}

function run(){
  window.alert("Successfully ran away!");
  fightdiv.style.display = "none";  
}
