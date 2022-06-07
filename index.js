var count = 0;

$(".title-btn").click(function(event){
  count++;
  var rand = Math.floor(Math.random()*13) + 78;
  var audio = new Audio("sounds/" + rand + ".mp3");
  audio.play();
  console.log(count)
})

// if (count === 1) {
//   // $(".hintBtn").style.visibility = "visible";
//   // $(".hintBtn").click(function(){
//     $(".hint").text("Hint: The verse is in Chapter " + rand + " of the Qur'an");
//   // });
// }
