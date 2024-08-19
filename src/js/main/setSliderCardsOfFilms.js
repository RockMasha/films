import { fetchPopularMovies } from "../service/api";
import { createSomeCards } from "../universal/createSomeCards";
import { getSliderCard } from "../universal/templateCardFilm/getSliderCard";

export async function setSliderCardsOfFilms() {
  const listCardsEl = document.querySelector(".popular-slider");

  const infoOfCards = await createSomeCards(
    fetchPopularMovies,
    false,
    getSliderCard
  );

  const cards = infoOfCards.cards.join("");
  listCardsEl.insertAdjacentHTML("beforeend", cards);
}
