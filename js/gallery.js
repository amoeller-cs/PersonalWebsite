// Your code is really clean so I am really nitpicking here! 
// Perhaps consider adding a back button as well, or perhaps buttons that take you directly to an image . 
// For the latter you would just need a setSlide(n) function that changes your imageDex to = n, and some buttons that would call each function. 

let imageDex = 0;
let images = [
  "imgs/appleADayHome.png",
  "imgs/appleADayCal.png",
  "imgs/appleADaySymp.png",
  "imgs/erDiagram.png",
];
let alts = [
  "Home page from my Android Application, Apple A Day",
  "Calendar page from Apple A Day, colors on Calendar indicate symptom severity",
  "U/I for the symptom selection page from Apple A Day",
  "An ER diagram from my stock management relational database model",
];
let totalImages = 4;

function nextImage() {
  imageDex++;
  imageDex = imageDex % totalImages;
  document.getElementById("photo").src = images[imageDex];
  document.getElementById("photo").alt = alts[imageDex];
  document.getElementById("descript").innerHTML = alts[imageDex];
}

const nextButton = document.querySelector("#next");
nextButton.onclick = nextImage;
