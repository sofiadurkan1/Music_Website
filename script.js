let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./images/pause.png";
  } else {
    mySong.pause();
    icon.src = "./images/play.png";
  }
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
