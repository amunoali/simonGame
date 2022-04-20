$("h1").addClass("bigTitle")
$('button').html("<em>Heyy</em>")
$("img").addClass("image")
console.log($('img').attr("src"))
$('a').attr("href", "https://www.yahoo.com")
$('h1').click(function(){
    $("h1").css("color", "orange")
})
$("button").click(function(){
    $("h1").css("color", "red")
})
$("input").keypress(function(){
    $("h1").text(event.key)
})
$("h1").on("mouseover", function(){
    $("h1").css("color", "green")
})