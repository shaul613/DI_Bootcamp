
let colorsArr = "red blue green yellow #2282d9 #6aab55 #e54e98 #d59631 #77bd6a #e9e636 #cfbb95 #ce6dde #2c673e #573918 #cdbba7 #11ddee #d8585866 #aab52966 #25894466 #4468b966 #38150c66".split(" ");

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
