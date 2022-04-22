let buttoncolors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []

let started = false
let level = 0

$(document).keydown(function() {
    if (!started){
        $("#level-title").text("Level " + level)
        nextSequence()
        started = true
    }
})
$(".btn").click(function(){
    let usedChosencolor = $(this).attr("id")
    userClickedPattern.push(userchosenColor)
    playSound(userchosenColor)
    checkAnswer(userClickedPattern.length - 1)
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel])
    console.log("success")
    if (userClickedPattern.length === gamePattern.length){
    setTimeout(function(){
        nextSequence()
    }, 100)
} 
} {
    console.log("wrong")
    playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(function(){
    }, 200)

    $("Level-title").text("Game Over, Press Any Key to Restart")
    
}
function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
  
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  }
  
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
  //1. Create a new function called startOver().
  function startOver() {
  
    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }