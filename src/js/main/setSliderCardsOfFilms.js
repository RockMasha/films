import { createCardOfFilm } from "../universal/createCardOfFilm";
import { initAllRatings } from "../universal/initAllRatings";
import { getSliderCard } from "../universal/templateCardFilm/getSliderCard";
import { popularFilms } from "./popularFilms";
import { root } from "./rootOfMainPage";

export async function setSliderCardsOfFilms() {
  const cards = await Promise.all(
    popularFilms.map((item) => createCardOfFilm(item, getSliderCard))
  );
  root.popularSlider.innerHTML = cards.join("");

  const ratingAllEls = root.popularSlider.querySelectorAll(".rating");
  initAllRatings(ratingAllEls);
}
