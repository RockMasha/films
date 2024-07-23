import { fetchFilmsByGenres } from "../service/api";
import { FilmCards } from "../universal/FilmCards";

export class GenresFilmCards extends FilmCards {
  #pastGenresId;

  constructor(element, btnBox) {
    super(element);
    this.btnBox = btnBox;
    this.page = 1;
    this.genresId;
  }

  async setCardsOnGenres(genresEl) {
    this.setGenresId(genresEl);
    if (this.#isEqualGenres()) {
      return;
    }
    this.element.innerHTML = "";
    this.resetPage();
    this.setCardsOfFilms();
  }

  async setCardsOfFilms() {
    this.#removeBtn();
    this.nextPage();
    await super.setCardsOfFilms(fetchFilmsByGenres, {
      genreId: this.genresId,
      page: this.page,
    });
    this.#setBtn();
  }

  setGenresId(genresEl) {
    const genreId = genresEl.dataset.genresId;
    this.#pastGenresId = this.genresId;
    this.genresId = genreId;
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }

  #isEqualGenres() {
    return this.#pastGenresId === this.genresId;
  }
  #removeBtn() {
    this.btnBox.innerHTML = "";
  }
  #setBtn() {
    this.btnBox.innerHTML =
      '<button class="genres__bth-more">More movies</button>';
  }
}
