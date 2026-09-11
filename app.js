let clickCount = 0;

function togglePopup() {
  if (clickCount % 2 == 0) {
    document.querySelector(".form-container-1").style.display = "block";
  } else {
    document.querySelector(".form-container-1").style.display = "none";
  }
  clickCount++;
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.contact-background') && !e.target.closest('.form-container-1')) {
    document.querySelector(".form-container-1").style.display = "none";
  }
});



const toggleBtn = document.querySelector("#toggleBtn");
document.documentElement.dataset.theme = "dark";
toggleBtn.addEventListener('click', () => {
  const toggledTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = toggledTheme;
});