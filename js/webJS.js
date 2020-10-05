function darkMode() {
    let siteHTML = document.body;
    siteHTML.classList.toggle("dark-mode");
}

const darkModeButton = document.querySelector("#darkMode");
darkModeButton.onclick = darkMode;