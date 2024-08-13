import { setSliderCardsOfFilms } from "./js/main/setSliderCardsOfFilms";
import { setInfoOfMostPopularFilm } from "./js/main/setInfoOfMostPopularFilm";
import {} from "./js/main/swiper";
import { setActiveMainLink } from "./js/main/setActiveMainLink";
import { removeContentLoader } from "./js/universal/removeContentLoader";

setInfoOfMostPopularFilm();

await setSliderCardsOfFilms();

setActiveMainLink();

removeContentLoader();
