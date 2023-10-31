const map = document.getElementById("map");
const path = document.getElementById("path");
//const itm = document.getElementById("items");
//const temptext = document.getElementById("temptext");
//const tempdiv = document.getElementById("tempdiv");
//const fighttext = document.getElementById("fighttext");
//const fightdiv = document.getElementById("fight");
//const fightbuttontea = document.getElementById("fightbuttontea");
//const fightbuttonblade = document.getElementById("fightbuttonblade");

function togglehide(divname) {
   var x = document.getElementById(divname);
   if (x.style.display === "none") {
      x.style.display = "block";
   } 
   else {
      x.style.display = "none";
   }
}

var field = Array.from(Array(16), () => new Array(16));
function makeRows(rows, cols) {
   map.style.setProperty('--grid-rows', rows);
   map.style.setProperty('--grid-cols', cols);
   for (j = 0; j < (rows * cols); j++) {
      let cell = document.createElement("div");
      var e = Math.random();
      let x = Math.floor(j/cols);
      let y = (j%rows);
      if (e < 0.1){
         // Clearing 10% chance
         cell.innerText= ('\u25ce');
         cell.style.color = '#00b4d6';
      }
      else if (e < 0.3){
         // Barrens 20% chance
         cell.innerText=('\u26C6');
         cell.style.color = '#c28e60';
      }
      else if (e < 0.5){
         // Field 20% chance
         cell.innerText= ('\udb85\udd10');
         cell.style.color = '#dee286';
      }
      else if (e < 0.7){
         // Forest 20% chance
         cell.innerText= ('\udb86\udc97');
         cell.style.color = '#71a28e';
      }
      else if (e < 0.85){
         // Ruins 15% chance
         cell.innerText= ('\udb82\udfa2');
         cell.style.color = '#aba8b4';
      }
      else{
         // Caves 15% chance
         cell.innerText= ('\ue2a6');
         cell.style.color = '#465058';
      }
      map.appendChild(cell);
      cell.hidden = false;
      field[x][y] = j;
      cell.id = "c" + j;
   };
};
makeRows(16, 16, field);

var force_field = Array.from(Array(16), () => new Array(16));
function makeRows2(rows, cols) {
   path.style.setProperty('--grid-rows', rows);
   path.style.setProperty('--grid-cols', cols);
   for (i = 0; i < (rows * cols); i++) {
      let step = document.createElement("div");
      let x = Math.floor(i/cols);
      let y = i%rows;
      path.appendChild(step).className="grid-item2";
      step.id = i;
      force_field[x][y] = step.id;
   };
};
makeRows2(16, 16);
//"div#" +  + ".grid-item2";
var avatar = '@';
var position = "[force_field[0][4]]";
position.innerText=avatar;
position.style.color = '#cc3e44';
position.style.background = '#081620';

//var playerhp = 10;
//var monsterhp = 10;

//itm.innerText = "X";
//itm.appendChild(document.createTextNode("Hope\n"));
//itm.appendChild(document.createTextNode("Shard of Sorrow\n"));
//itm.appendChild(document.createTextNode("Die of Disease\n"));
//itm.appendChild(document.createTextNode("Vial of Vice\n"));
//itm.appendChild(document.createTextNode("Veil of Violence\n"));
//itm.appendChild(document.createTextNode("Mask of Madness\n"));


/*
function event(){
temptext.textContent ="Event text here";
tempdiv.style.display = "block";
itm.appendChild(document.createTextNode("Itemname\n"))
}

function eventTeaSet(){
temptext.textContent ="As you enter the cave you discover an old hermit standing over a bubbling pot. She offers you some 'tea'. \n\nAs you finish and turn to leave she pushes a warm clay pot into your hands.";
tempdiv.style.display = "block";
itm.appendChild(document.createTextNode("Hermit'i an-Tea-contamination Set\n"));
fightbuttontea.style.display = "inline-block";
}


function eventWep1(){
temptext.textContent ="As the sun sets you notice a gleam from the ashes of the ruins.";
tempdiv.style.display = "block";
itm.appendChild(document.createTextNode("Rusty Blade\n"));
fightbuttonblade.style.display = "inline-block";
}

function excavate() {
var e = Math.random();
if (e < 0.1){
itm.appendChild(document.createTextNode("Item\n"));
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
*/