export function initAllRatings(ratingAllEls) {
  let ratingEl;
  for (let i = 0; i < ratingAllEls.length; i++) {
    ratingEl = ratingAllEls[i];
    setVariableForRating();
  }

  function setVariableForRating() {
    const ratingValue = ratingEl.querySelector(".rating__value");
    const value = ratingValue.textContent;

    if (value === "no rating") {
      return;
    }

    const ratingActive = ratingEl.querySelector(".rating__active");
    ratingActive.style.width = `${value / 0.1}%`;
  }
}
