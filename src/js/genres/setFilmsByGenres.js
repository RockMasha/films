import { GenresFilmCards } from "./GenresFilmCards";
import { root } from "./rootOfGenresPage";

let listFilms = new GenresFilmCards(root.genresMovies, root.moreFilmsBox);

export function setFilmsByGenres(event) {
  const currentEl = event.target.closest(".genres__item");
  if (!currentEl) {
    return;
  }

  listFilms.setCardsOnGenres(currentEl);

  changeActiveItem(currentEl);
}

let lastActiveEl = "";
function changeActiveItem(currentEl) {
  if (lastActiveEl === currentEl) {
    return;
  }
  if (lastActiveEl) {
    lastActiveEl.removeAttribute("active");
  }
  lastActiveEl = currentEl;
  currentEl.setAttribute("active", "");
}

export function showMoreFilms() {
  listFilms.setCardsOfFilms();
}
