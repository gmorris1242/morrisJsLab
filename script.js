var userName= ""
var userHealth = 40;
var grantHealth = 10;
var userWins = 0;
var grantWins = 0;


function startGame() {
  var question = prompt("Do you want to play?");
  if (question.toLowerCase() === "yes") {
    userName = prompt("What is your name?");
    startCombat();
  } else {
    console.log("You have left the game")
  }
}


 function getDamage() {
   return Math.floor(Math.random() * 5) + 1;
 }
                                //console.log(getDamage()); random number test.

function startCombat() {
  while (userWins < 3 && grantWins <  1) {

    userHealth-= getDamage();
    grantHealth-= getDamage();
    console.log(userName + " has " + userHealth + " left.");
    console.log("Grant the Mighty Chicken has " + grantHealth + " left.");
    if (grantHealth <= 0) {
      userWins++;
      grantHealth = 10
      // console.log("You won this round.");
    } else if (userHealth <= 0) {
      grantWins++;
    }
    var attackOrQuit = prompt("Attack or Quit?");
    if (attackOrQuit.toLowerCase() === "quit") {
      break;
    }
    // while (attackOrQuit.toLowerCase() !== "attack" || attackOrQuit.toLowerCase() !== "quit" ){
    //   var error = prompt("Choose either Attack or Quit");
    // }
  }//loop
  if (userWins === 3) {
    console.log(userName + " Wins!");
  } else if (grantWins > 0) {
    console.log("Grant Wins!");
  } else if (userHealth === 0 && grantHealth === 0){
    console.log("It's a tie!")
  }else {
    console.log("You have left the game")
  }
}//function

startGame();
