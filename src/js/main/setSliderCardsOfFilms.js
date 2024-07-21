import { fetchPopularMovies } from "../service/api";;
import { FilmCards } from "../universal/FilmCards";
import { getSliderCard } from "../universal/templateCardFilm/getSliderCard";
import { root } from "./rootOfMainPage";

export async function setSliderCardsOfFilms() {
  const filmCards = new FilmCards(root.popularSlider);
  filmCards.setCardsOfFilms(fetchPopularMovies, false, getSliderCard)
}
