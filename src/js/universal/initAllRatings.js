export function initAllRatings(ratingAllEls) {
  let ratingEl;
  for (const i of ratingAllEls) {
    ratingEl = i;
    setVariableForRating();
  }

  function setVariableForRating() {
    const ratingValue = ratingEl.querySelector(".rating__value");
    const value = ratingValue.textContent;

    if (value === "no rating") {
      return;
    }

    setWidthOfActive(value);
  }

  function setWidthOfActive(value) {
    const ratingActive = ratingEl.querySelector(".rating__active");
    ratingActive.style.width = `${value / 0.1}%`;
  }
}
