import { fetchListGenres } from "../service/api";
import { root } from "./rootOfGenresPage";

export async function setListOfGenresInPage() {
  const genres = await fetchListGenres();
  let listOfGenres = genres.genres;

  const listEl = listOfGenres.map((item) => createItemOfGenres(item));
  root.genresList.innerHTML = listEl.join("");
}

function createItemOfGenres(info) {
  const { id, name } = info;
  return `<li class="genres__item" data-genres-id="${id}">
            <button class="genres-item__btn">${name}</button>
          </li>
  `;
}
