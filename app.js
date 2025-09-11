let clickCount = 0;

function togglePopup() {
  if (clickCount % 2 == 0) {
    document.querySelector(".form-container-1").style.display = "block";
  } else {
    document.querySelector(".form-container-1").style.display = "none";
  }
  clickCount++;
  console.log(clickCount);
}
