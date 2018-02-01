(function() {

  var character = {
    name: "",
    health: 40,
    wins: 0,
    healsRemaining: 2,
    generateAttackDamage: function() {
      return Math.floor(Math.random() * 5) + 1;
    },
    heal: function() {
      this.health += Math.floor(Math.random() * 10) + 1;
    },
  }

  var grant = {
    name: "Grant",
    health: 10,
    wins: 0,
    generateAttackDamage: function() {
      return Math.floor(Math.random() * 5) + 1;
    },
  }

  var startButton = document.getElementById("startButton");
  var main = document.getElementById("main");
  var name = document.getElementById("name");
  var attackButton = document.getElementById("attackButton");
  var healButton = document.getElementById("healButton");
  var quitButton = document.getElementById("quitButton");
  var muteButton = document.getElementById("muteButton");
  var characterHealthBar = document.getElementById("characterHealthBar");
  var healsRemainingBar = document.getElementById("healsRemainingBar");
  var winsBar = document.getElementById("winsBar");
  var messageEl = document.getElementById("message");
  var grantHealthBar = document.getElementById("grantHealthBar");
  var audio = document.getElementById("audio");

console.log(audio);

  attackButton.onclick = function() {

    character.health -= grant.generateAttackDamage();
    grant.health -= character.generateAttackDamage();
    updateMessage(character.name + ": " + character.health + " health remaining || Grant: " + grant.health + " health remaining.");
    updateDisplay();

    if (grant.health <= 0) {
      // grant.health = 10;
      character.wins++;
      updateDisplay();
      if (character.wins === 5) {
        updateMessage("YOU WIN!");
      attackButton.classList.add("displayNone");
      healButton.classList.add("displayNone");
      } else if (character.health <= 0) {
        updateDisplay();
        updateMessage("Grant Wins!");
        attackButton.classList.add("displayNone");
        healButton.classList.add("displayNone");

      } else {
        updateMessage(character.name + ": " + character.health + " health remaining ||  You must beat Grant 5 times");
        grant.health = 10;
      }
    } else if (character.health <= 0) {
      updateDisplay();
      updateMessage("Grant Wins!");
      attackButton.classList.add("displayNone");
      healButton.classList.add("displayNone");

    }
  };


  healButton.onclick = function() {
    if (character.healsRemaining > 0) {
      character.heal();
      character.healsRemaining--;
      updateDisplay();
      updateMessage(character.name + ": " + character.health + " health remaining || YOU HAVE HEALED");
    } else {
      updateDisplay();
      updateMessage("You have no heals left");
    }
  }

  startButton.onclick = function() {
    character.name = prompt("What is your name?");
    main.classList.remove("displayNone");
    startButton.classList.add("displayNone");
    name.innerHTML = "<h3>" + character.name + " Stats</h3>";
  }

  quitButton.onclick = function() {
    window.location.reload();
  }

  // muteButton.onclick = function() {
  //   if (audio.muted = false){
  //     audio.muted = true;
  //   }
muteButton.onclick = function() {
  audio.muted = !audio.muted;
}


  function updateDisplay() {
    characterHealthBar.value = character.health;
    grantHealthBar.value = grant.health;
    healsRemainingBar.value = character.healsRemaining;
    winsBar.value = character.wins;
  }

  function updateMessage(newMessage) {
    messageEl.innerText = newMessage;
  }









}());
