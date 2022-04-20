let buttoncolors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []

function nextSequence(){
    let randomNumber = Math.floor(Math.random()* 4) 
   
    let randomChosenColor = buttoncolors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("./audio/" + randomChosenColor + ".mp3")
    audio.play()

    $("button").on("click", function(){

 audio.play()
        userClickedPattern.push(randomChosenColor)
    })
}


