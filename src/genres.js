import {} from "./js/genres/genresSwiper";
import { root } from "./js/genres/rootOfGenresPage";
import { setFilmsByGenres } from "./js/genres/setFilmsByGenres";
import { setListOfGenresInPage } from "./js/genres/setListOfGenresInPage";

setListOfGenresInPage();

root.genresTypesList.addEventListener("click", setFilmsByGenres);
