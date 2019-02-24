//variables
var score, letter, guessLeft, guessSoFar;
var wins = 0;
var losses = 0;
guessLeft = 10;




//runs check letter function

//
var array = [];
var lettersToGuess = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomNum = Math.floor((Math.random() * (lettersToGuess.length - 1)) + 1);
var i;
//console.log('randomNum', randomNum);
document.onkeyup = function (event) {

  var randomNum = Math.floor((Math.random() * (lettersToGuess.length - 1)) + 1);
  var string = "";
  // Captures the key press, converts it to lowercase, and saves it to a variable.
  letter = event.key.toLowerCase();
  array.push(letter);
  console.log(array);
  //loops thru the array and displays the contents in the "guessSoFar" div
  for (i = 0; i < array.length; i++) {
    string += array[i] + " ";
  }

  document.getElementById("guessSoFar").innerHTML = "Guesses So Far: " + string;
  console.log("this is the letter " + string);
    //get a random number to set the index of the "letters to guess" array
  
  console.log('randomNum', randomNum);
  
  //if the letter recieved from the keyboard input equals 
  //the corresponding index of the array print "correct to the console" 
  if (letter === lettersToGuess[randomNum]) {
    wins ++;
    console.log("yes");
    //console.log("wins: " + wins);
    console.log("test against tis letter " + lettersToGuess[randomNum]);
  }
  else {
    losses++;
    guessLeft--;
    //console.log("no");
    //console.log("losses: " + losses);


  }

  if (wins == 10) {

    alert("you won!")
    resetGame();
  }
  if (guessLeft == 0) {
    alert("Better luck next time.")
    resetGame();
  }
 document.getElementById('wins').innerHTML = "Wins: " + wins;

 document.getElementById('GuessesLeft').innerHTML = "GuessesLeft: " + guessLeft;

 document.getElementById('Losses').innerHTML = "Losses: " + losses; 
}

//sets all the default values in the game
function resetGame() {

  wins = 0;
  guessLeft = 10;
  guessSoFar = "";
  string = "";
  losses = 0;
  document.getElementById("guessSoFar").innerHTML ="Guesses So Far: 0";
}