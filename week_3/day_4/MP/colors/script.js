
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
