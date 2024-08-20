import { GenresFilmCards } from "./GenresFilmCards";
import { root } from "./rootOfGenresPage";

let listFilms = new GenresFilmCards(root.genresMoviesBlock);

export function setFilmsByGenres(event) {
  const currentEl = event.target.closest(".genres__item");
  if (!currentEl) {
    return;
  }

  const idCurrentGenres = getGenresId(currentEl);
  listFilms.setCardsOnGenres(idCurrentGenres);

  changeActiveItem(currentEl);
}

let lastActiveEl = null;
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

function getGenresId(genresEl) {
  return genresEl.dataset.genresId;
}

export function showMoreFilms() {
  listFilms.setCardsOfFilms();
}
