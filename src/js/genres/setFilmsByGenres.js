import { GenresFilmCards } from "./GenresFilmCards";
import { root } from "./rootOfGenresPage";

let listFilms = new GenresFilmCards(root.genresMovies);

export function setFilmsByGenres(event) {
  const currentEl = event.target.closest(".genres__item");
  if (!currentEl) {
    return;
  }

  listFilms.setCardsOnGenres(currentEl);
  if (!root.moreFilmsBox.querySelector(".genres__bth-more")) {
    setBtn();
  }

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

function setBtn() {
  root.moreFilmsBox.innerHTML =
    '<button class="genres__bth-more">20 more movies</button>';
}

export function showMoreFilms() {
  listFilms.setCardsOfFilms();
}
