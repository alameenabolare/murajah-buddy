var count = 0;

$(".title-btn").click(function(event){
  count++;
  var rand = Math.floor(Math.random()*13) + 78;
  var audio = new Audio("sounds/" + rand + ".mp3");
  audio.play();

  $(".hintBtn").removeClass("removeHintBtn");

  $(".hintBtn").click(function(){
    $(".hint").text("Hint: The verse is in Surat " + Quran.surah.name(rand, 'english_name') + " of the Qur'an");
    setTimeout(function(){
      $(".hint").text("");
    }, 2000);
    });
});
