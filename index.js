// Button Press Detection

var num_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < num_buttons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {

var btnInnerHTML = this.innerHTML;

makesound(btnInnerHTML);

btnAnimation(btnInnerHTML);

});

}


// Keyboard Press Detection
document.addEventListener("keydown", function (event){

  makesound(event.key);

  btnAnimation(event.key);

});

function makesound(key) {
  switch (key) {
    case "w":

      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "a":

      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "s":

      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "d":

      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "j":

      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "k":

      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "l":

      var crash = new Audio('sounds/crash.mp3');
      crash.play();

      break;

    default: console.log(btnInnnerHTML);
  }
}

function btnAnimation(currentKey){

  var activebtn = document.querySelector("." + currentKey);{

  activebtn.classList.add("pressed");

  setTimeout(function (){
    activebtn.classList.remove("pressed");}, 100);

  }
}
