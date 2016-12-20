var userChoice = function() {
  var userChoice; // = prompt("Do you choose rock, paper or scissors?");
  userChoice = String(document.getElementById("user").value);

  var computerChoice = Math.random();
  var computerChoice;
  if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    else if(choice1 === "rock") {

        if(choice2 === "scissors") {
            return "Rock";
        }
        else {
            return "Paper";
        }
    }

    else if(choice1 === "paper") {

        if(choice2 === "rock") {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

    else if(choice1 === "scissors") {

        if(choice2 === "rock") {
            return "Rock";
        }
        else {
            return "Scissors";
        }
    }

    else {
        return "Please choose again..."
    }
  }

  document.getElementById("you").innerHTML = "Your Choice: " + userChoice;
  document.getElementById("comp").innerHTML = "Computer's Choice: " + computerChoice;
  document.getElementById("output").innerHTML = compare(userChoice.toLowerCase(), computerChoice).toLowerCase();
}

var changeMusic = function() {
  if (document.getElementsByClassName("music").innerHTML == '<audio class=music src="resources/3 Hours of Christmas Music Classics and Holiday Scenery - The Original!.mp3" autoplay="true" loop="true" noplaybar="true" volume="1.0" ></audio>') {
    document.getElementsByClassName("music").innerHTML = '<audio class=music src="resources/Kenny Loggins - Danger Zone.mp3" autoplay="true" loop="true" noplaybar="true" volume="1.0" ></audio>';
  }
  else if (document.getElementsByClassName("music").innerHTML == '<audio class=music src="resources/Kenny Loggins - Danger Zone.mp3" autoplay="true" loop="true" noplaybar="true" volume="1.0" ></audio>') {
    document.getElementsByClassName("music").innerHTML = '<audio class=music src="resources/3 Hours of Christmas Music Classics and Holiday Scenery - The Original!.mp3" autoplay="true" loop="true" noplaybar="true" volume="1.0" ></audio>';
  }
}
