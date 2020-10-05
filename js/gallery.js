let imageDex = 0;
let images = ["imgs/me.jpg", "imgs/appleADay.png", "imgs/erDiagram.png"];
let totalImages = 3;

function nextImage() {
    imageDex++;
    imageDex = imageDex % totalImages;
    document.getElementById("photo").src = images[imageDex];
}

const nextButton = document.querySelector("#next");
nextButton.onclick = nextImage;
