const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});
function togglePlayPause(songId, button) {
  const audio = document.getElementById(songId);
  
  if (audio.paused) {
    
    document.querySelectorAll('audio').forEach(function(otherAudio) {
      if (otherAudio !== audio) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
        const otherButton = otherAudio.parentNode.querySelector('.btn');
        if (otherButton) {
          otherButton.innerText = "play now";  
        }
      }
    });

    audio.play();
    button.innerText = "pause now";
  } else {
    
    audio.pause();
    button.innerText = "play now";
  }

 
  audio.onended = function() {
    button.innerText = "play now";
  };
}