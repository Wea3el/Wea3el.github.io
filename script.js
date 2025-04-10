var micO = false;
var headO = false;
var toggleOpen = false;

window.onload = function () {
    setTimeout(function () {
        var loader = document.getElementById('loader');
        if (loader) {
            loader.remove();
        }
    }, 2000);
};

var x = new Audio("./Assets/discordmute_IZNcLx2.mp3"); // Make sure this URL points directly to an audio file
var y = new Audio("./Assets/discord-unmute-sound.mp3"); // Make sure this URL points directly to an audio file

function mic() {
    if (!micO) {
        
        document.getElementById("mic").className = "fa-solid fa-microphone-slash mute";
        micO = true;
    } else {
        y.play();
        document.getElementById("mic").className = "fa-solid fa-microphone";
        micO = false;
    }
}

function headp() {
    if (!headO) {
        
        document.getElementById("head").className = "fa-solid fa-headphones mute";
        headO = true;
    } else {
        document.getElementById("head").className = "fa-solid fa-headphones";
        
        headO = false;
    }
}

function openToggle() {
    if (window.innerWidth < 750) {
        if (!toggleOpen) {
            document.getElementById("s").style.display = "none";
            document.getElementById("r").style.display = "flex";
            toggleOpen = true;
        } else {
            document.getElementById("s").style.display = "block";
            document.getElementById("r").style.display = "none";
            toggleOpen = false;
        }
    }
}
let darkMode = false;

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const rightside = document.getElementById("r");
    const sidebar = document.getElementById("s");

    toggleBtn.addEventListener("click", () => {
        if (!darkMode) {
            rightside.style.backgroundColor = "#2d2f35";
            sidebar.style.backgroundColor = "#36393f";
        } else {
            rightside.style.backgroundColor = "white";
            sidebar.style.backgroundColor = "white";
        }
        darkMode = !darkMode;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("mainImage");

    // Select all friend name buttons
    const friendButtons = document.querySelectorAll(".username-btn");

    friendButtons.forEach(button => {
        button.addEventListener("click", () => {
            mainImage.src = button.dataset.img || "./Assets/chat.png";
        });
    });
});
document.getElementById("collapseBtn").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebarContainer");
    sidebar.classList.toggle("collapsed");
});