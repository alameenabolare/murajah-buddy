$(".button").click(function(event){
  var rand = Math.floor(Math.random()*13) + 78;
  var audio = new Audio("sounds/" + rand + ".mp3");
  audio.play();
})
