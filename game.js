

var gamePattern=[];
var userClickedPattern=[];

var started = false;
var level=0;
   var buttonColors=["green","red","yellow","blue"];

$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSquence();
    started = true;
  }
});





function nextSquence(){
level++;
$("h1").text("Level "+level);

userClickedPattern=[];


// random number generator
  var randomNumber=Math.random()*4;
  randomNumber=Math.floor(randomNumber);

  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
// Click animation
  $("#"+randomChosenColor).delay(1000).fadeOut(100).fadeIn(100);
// Sound board switch computer
  switch (randomChosenColor) {
    case "green":
    var gSound=new Audio("sounds/green.mp3");
      gSound.play();
      break;

      case "red":
      var rSound=new Audio("sounds/red.mp3");
      rSound.play();
      break;

      case "yellow":
      var ySound=new Audio("sounds/yellow.mp3");
      ySound.play();
      break;

      case "blue":
      var bSound=new Audio("sounds/blue.mp3");
      bSound.play();
      break;
    default:
    var wrongSonund=new Audio("sounds/wrong.mp3");
  }
}


// User click detection
$("div .btn").on("click",function(){
var userChosenColor=this.id;
userClickedPattern.push(userChosenColor);
console.log(userClickedPattern);
$("#"+userChosenColor).addClass("pressed");
setTimeout(function(){
  $("#"+userChosenColor).removeClass("pressed")
},100);

  checkAnswer(userClickedPattern.length-1);

switch (userChosenColor) {
  case "green":
  var gSound=new Audio("sounds/green.mp3");
    gSound.play();
    break;

    case "red":
    var rSound=new Audio("sounds/red.mp3");
    rSound.play();
    break;

    case "yellow":
    var ySound=new Audio("sounds/yellow.mp3");
    ySound.play();
    break;

    case "blue":
    var bSound=new Audio("sounds/blue.mp3");
    bSound.play();
    break;
  default:
  var wrongSonund=new Audio("sounds/wrong.mp3");
}
});



function checkAnswer(currentlevel){
    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]){
        console.log("success");
        if (gamePattern.length === userClickedPattern.length){
              nextSquence();
        }
    } else {
      console.log("fail");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over, Press any key to restart");
      gameOver();
    }
}

function gameOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  started = false;
}
