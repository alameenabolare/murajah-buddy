// Quran.init();

var count = 0;

$(".title-btn").click(function(event){
  count++;
  // var rand = Math.floor(Math.random()*995) + 5242;
  // var audio = new Audio("https://cdn.islamic.network/quran/audio/128/ar.minshawi/" + rand + ".mp3");

  var rand = Math.floor(Math.random()*13) + 78;
  var audio = new Audio("sounds/" + rand + ".mp3");
  audio.play();

  $(".hintBtn").removeClass("removeHintBtn");

  $(".hintBtn").click(function(){
    $(".hint").text("Hint: The verse is in Surat " + rand + " of the Quran");

//     $(".hint").text("Hint: The verse is in Surat " + Quran.surah.name(rand, 'english_name') + " of the Quran");
    setTimeout(function(){
      $(".hint").text("");
    }, 2000);
    });
});
