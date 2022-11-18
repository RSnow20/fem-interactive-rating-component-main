let ratingActive = null;

function init() {
  let ratingButtons = document.querySelectorAll(".rating-star");

  ratingButtons.forEach((button) => {
    let buttonID = button.getAttribute("id");
    button.addEventListener("click", function () {
      setActiveRating(button);
    });
  });
}

function setActiveRating(ratingButton) {
  if (!ratingButton) {
    return;
  }

  ratingActive = ratingButton.getAttribute("id");
  ratingButton.classList.add("rating-active");

  let ratingButtons = document.querySelectorAll(".rating-star");

  ratingButtons.forEach((button) => {
    let buttonID = button.getAttribute("id");
    if (buttonID != ratingButton.getAttribute("id")) {
      button.classList.remove("rating-active");
    }
  });
}

init();

console.log(ratingActive);
