import { root } from "./js/genres/rootOfGenresPage";
import { setFilmsByGenres, showMoreFilms } from "./js/genres/setFilmsByGenres";
import { setListOfGenresInPage } from "./js/genres/setListOfGenresInPage";

setListOfGenresInPage();

root.genresList.addEventListener("click", setFilmsByGenres);

root.moreFilmsBox.addEventListener("click", showMoreFilms)