import {} from "./js/genres/btnUpSettings";
import {} from "./js/genres/genresSwiper";
import { root } from "./js/genres/rootOfGenresPage";
import { setActiveGenresLink } from "./js/genres/setActiveGenresLink";
import { setFilmsByGenres } from "./js/genres/setFilmsByGenres";
import { setListOfGenresInPage } from "./js/genres/setListOfGenresInPage";
import { stickyScrollForListTypesEl } from "./js/genres/stickyScroll";

setActiveGenresLink();

setListOfGenresInPage();
window.addEventListener("scroll", stickyScrollForListTypesEl);

root.genresTypesList.addEventListener("click", setFilmsByGenres);
