// try a var keeping track of the amount of times grant hits zero in order to track the
// round and be able to say something differnet after each round

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
      if (userWins === 1) {
        console.log(userName + " wins round one!")
      } else if (userWins === 2) {
        console.log(userName + " wins round two!  One more to go!")
      }
    } else if (userHealth <= 0) {
      grantWins++;
    }



  if (userWins === 3) {
    console.log(userName + " has defeated Grant!");
  } else if (grantWins > 0) {
    console.log("Grant Wins!");
  } else if (userHealth === 0 && grantHealth === 0){
    console.log("It's a tie!")
  // }else {
  //   console.log("You have left the game")
  }

  if (userWins < 3 && grantWins <  1){
    var attackOrQuit = prompt("Attack or Quit?");
  attackOrQuit = attackOrQuit.toLowerCase();
  while (attackOrQuit !== "attack" && attackOrQuit !== "quit"){
     attackOrQuit = prompt("Choose Attack or Quit");
  }
  if (attackOrQuit === "quit") {
    console.log("You have left the game.")
    break;
  }
}
  }//loop
}//function

startGame();
