// try a var keeping track of the amount of times grant hits zero in order to track the
// round and be able to say something differnet after each round

(function () {

var character = {
  name: "",
  health: 40,
  wins: 0,
  healsRemaining: 2,
  generateAttackDamage:  function() {
     return Math.floor(Math.random() * 3) + 1;
   },
  heal: function() {
      this.health += Math.floor(Math.random() * 10) + 1;
   },
}

var grant = {
  name: "Grant",
  health: 10,
  wins: 0,
  generateAttackDamage:  function() {
     return Math.floor(Math.random() * 5) + 1;
   },
}

function startGame() {
  var question = prompt("Do you want to play?");
  if (question.toLowerCase() === "yes") {
    character.name = prompt("What is your name?");
    startCombat();
  } else {
    console.log("You have left the game")
  }
}

function startCombat() {

  while (character.wins < 5 && grant.wins <  1) {


    if ( character.healsRemaining > 0){
    var attackOrQuit = prompt("Attack, Heal or Quit?");
    attackOrQuit = attackOrQuit.toLowerCase();
  } else {attackOrQuit = prompt("Attack or Quit?");
          attackOrQuit = attackOrQuit.toLowerCase();}


    while (attackOrQuit !== "attack" && attackOrQuit !== "quit" && attackOrQuit !== "heal"){
       attackOrQuit = prompt("Choose Attack, Heal or Quit?");
    }
    if (attackOrQuit === "quit") {
        console.log("You have left the game.")
        break;
    } else if (attackOrQuit === "heal"  && character.healsRemaining > 0) {
        character.heal();
        character.healsRemaining--;
        console.log(character.name + " has healed and has " + character.health + " and has " + character.healsRemaining + " heal remaing." );
    } else if(attackOrQuit === "heal"  && character.healsRemaining === 0){
      console.log("You don't have any heals left");
    } else if ( attackOrQuit === "attack"){


    character.health-= grant.generateAttackDamage();
    grant.health-= character.generateAttackDamage();
    console.log(character.name + " has " + character.health+ " left.");
    console.log("Grant the Mighty Chicken has " + grant.health + " left.");

    if (grant.health <= 0) {
      character.wins++;
      grant.health = 10
      if (character.wins === 1) {
        console.log(character.name + " wins round one!")
      } else if (character.wins === 2) {
        console.log(character.name + " wins round two!")
      } else if (character.wins === 3) {
        console.log(character.name + " wins round three!")
      } else if (character.wins === 4) {
        console.log(character.name + " wins round four!  One more to go!")
      }
      } else if (character.health <= 0) {
      grant.wins++;
      }

    if (character.wins === 5) {
      console.log(character.name + " has defeated Grant!");
    } else if (grant.wins > 0) {
      console.log("Grant Wins!");
    } else if (character.health === 0 && grant.health === 0){
      console.log("It's a tie!")
  }
}

  }//loop
}//function

startGame();



})();
