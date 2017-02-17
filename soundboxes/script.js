var airhornPlay = document.getElementById('airhornAudio');

var wowPlay = document.getElementById('wowAudio');

var sadPlay = document.getElementById('sadAudio');

$('#airhorn').mousedown(function(){
  airhornPlay.currentTime = 0;
  airhornPlay.play();
});

$('#wow').mousedown(function(){
  wowPlay.currentTime = 0;
  wowPlay.play();
});


$('#sad').mousedown(function(){
  sadPlay.currentTime = 0;
  sadPlay.play();
});