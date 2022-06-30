
function playTheGame(){
  let play = confirm("Do you want to play the game?");
  if(!play){
    console.log("No problem, goodbye!");
    return;
  }
  let num = prompt("Enter a number between 0 and 10!");
  let computerNumber;
  if(isNaN(num)){
    console.log("Sorry, it's not a number, Goodbye");
    return;
  } else if(num < 0 || num > 10){
    console.log("Sorry, it's not a good number, Goodbye.");
    return;
  } else{
    console.log("worked");
    let computerNumber = Math.floor(Math.random() * 10);
  }
compareNumbers(num, computerNumber);
}

function compareNumbers(userNumber,computerNumber){
  let i = 0;

  do{
    if(userNumber == computerNumber){
      alert("Winner");
    } else if(userNumber > computerNumber){
      alert("Your number is larger than the computer's. Try again!");
      userNumber = prompt("Guess a new number")
    }
  } while(userNumber != computerNumber && i < 2);
  if(i >= 3){
    console.log("Out of chances");
  }
  return;
}
