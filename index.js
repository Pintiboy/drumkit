var numOfButtons = document.querySelectorAll(".drum").length;

const audios = {
  crash: new Audio("sounds/crash.mp3"),
  kick: new Audio("sounds/kick-bass.mp3"),
  snare: new Audio("sounds/snare.mp3"),
  tom1: new Audio("sounds/tom-1.mp3"),
  tom2: new Audio("sounds/tom-2.mp3"),
  tom3: new Audio("sounds/tom-3.mp3"),
  tom4: new Audio("sounds/tom-4.mp3")
}

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("touchend", function(one, two, three, four, five){
    console.log(one);
    console.log(four);
    handleCharacter(this.innerHTML);
    this.blur();
  });
}

function handleClick() {
  handleCharacter(this.innerHTML);
}

document.addEventListener("keydown", function(event) {
  handleCharacter(event.key);
});


function handleCharacter(char) {
  var audio;
  //console.log(event);
  console.log(char);
  animateButton(char);

  switch (char) {
    case "w":
      audios.crash.play();
      break;
    case "a":
      audios.snare.play();
      break;
    case "s":
      audios.kick.play();
      break;
    case "d":
      audios.tom1.play();
      break;
    case "j":
      audios.tom2.play();
      break;
    case "k":
      audios.tom3.play();
      break;
    case "l":
      audios.tom4.play();
      break;
    default:

  }
}

function animateButton(currentKey) {

	console.log(currentKey);

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
