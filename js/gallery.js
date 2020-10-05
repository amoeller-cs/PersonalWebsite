let imageDex = 0;
let images = ["imgs/me.jpg", "imgs/appleADay.png", "imgs/erDiagram.png"];
let alts = ["It's me!.", "Calendar page from my Android Application, Apple A Day.", "An ER diagram from my stock management relational database model."];
let totalImages = 3;

function nextImage() {
    imageDex++;
    imageDex = imageDex % totalImages;
    document.getElementById("photo").src = images[imageDex];
    document.getElementById("photo").alt = alts[imageDex];
}

const nextButton = document.querySelector("#next");
nextButton.onclick = nextImage;
