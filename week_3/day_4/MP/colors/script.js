
let colorsArr = "red blue green yellow".split(" ");

function addColors(){
  for(i in colorsArr){
    let elm = document.createElement("div");
    elm.style.backgroundColor = colorsArr[i];
    elm.classList.add("paintBox")
    document.getElementById("paint_colors").appendChild(elm);
  }
}

addColors();

function addBoxes(){
  for(i=0; i<1024; i++){
    let elm = document.createElement("div");
    // let text = document.createTextNode(i);
    elm.classList.add("fillBox");
    // elm.appendChild(text);
    document.getElementById("boxes").appendChild(elm);
  }
}

addBoxes();
