
let colorsArr = "red blue green yellow #2282d9 #6aab55 #e54e98 #d59631 #77bd6a #e9e636 #cfbb95 #ce6dde #2c673e #573918 #cdbba7 #11ddee #d8585866 #aab52966 #25894466 #4468b966 #38150c66".split(" ");

function addColors(){ //creating color boxes
  for(i in colorsArr){
    let elm = document.createElement("div");
    elm.style.backgroundColor = colorsArr[i];
    elm.classList.add("paintBox");
    document.getElementById("paint_colors").appendChild(elm);
  }
}

addColors();

function addBoxes(){ //creating grid of small boxes
  for(i=0; i<1024; i++){
    let elm = document.createElement("div");
    // let text = document.createTextNode(i);
    elm.classList.add("fillBox");
    // elm.appendChild(text);
    document.getElementById("boxes").appendChild(elm);
  }
}

addBoxes();

function addEventToClass(className, e, func){ //Function for adding event listener to all elements of class
  elm = Array.from(document.getElementsByClassName(className));
  for(i in elm){
    elm[i].addEventListener(e, func);
  }
}

function handleColorClick(e){ //Changes / defines paintbrush color
  let paintbrush = e.target.style.backgroundColor;
  // console.log(paintbrush);
  let isClicking;
  addEventToClass("fillBox", "mousedown", function(){
    fillBox();
    isClicking = true;
    addEventToClass("fillBox", "mouseup", function(){
      isClicking = false;
    })
  });
  addEventToClass("fillBox", "mouseover", function(){
    if(isClicking){
      fillBox();
    }
  });
  function fillBox(){
    event.target.style.backgroundColor = paintbrush;
  }
}

addEventToClass("paintBox", "click", handleColorClick);
