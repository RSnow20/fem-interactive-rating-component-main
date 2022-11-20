let ratingActive = null;

function init() {
  let ratingButtons = document.querySelectorAll(".rating-star");

  ratingButtons.forEach((button) => {
    let buttonID = button.getAttribute("id");
    button.addEventListener("click", function () {
      setActiveRating(button);
    });
  });

  let buttonSubmit = document.querySelector("#rating-submit");

  buttonSubmit.addEventListener("click", function () {
    submit(ratingActive);
  });
}

function setActiveRating(ratingButton) {
  if (!ratingButton) {
    return;
  }

  ratingActive = ratingButton.getAttribute("id");
  ratingButton.classList.add("rating-active");

  let ratingStars = document.querySelectorAll(".rating-star");

  ratingStars.forEach((star) => {
    let starID = star.getAttribute("id");
    if (starID != ratingButton.getAttribute("id")) {
      star.classList.remove("rating-active");
    }
  });
}

function submit(rating) {
  if (!rating) {
    return;
  }

  renderThankYou(rating);
}

function renderThankYou(rating) {
  if (!rating) {
    return;
  }

  let cardWrapper = document.querySelector(".rating-card-wrapper");

  cardWrapper.innerHTML = "";
  cardWrapper.style.justifyContent = "center";

  let svg = document.createElement("img");
  svg.src = "images/illustration-thank-you.svg";
  svg.alt = "Phone with review being submitted";
  svg.style.marginInline = "auto";
  svg.style.marginTop = "1rem";
  svg.style.marginBottom = "2rem";
  cardWrapper.appendChild(svg);

  let ratingDiv = document.createElement("div");

  ratingDiv.innerHTML = "You selected " + rating + " out of 5";
  ratingDiv.classList.add("submitted-rating");

  cardWrapper.appendChild(ratingDiv);

  let title = document.createElement("h1");

  title.innerHTML = "Thank you!";
  title.classList.add("rating-title");
  title.style.textAlign = "center";

  cardWrapper.appendChild(title);

  let description = document.createElement("p");

  description.innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  description.classList.add("rating-description");
  description.style.textAlign = "center";

  cardWrapper.appendChild(description);
}

init();
