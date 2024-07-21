import { fetchFilmsByGenres} from "../service/api";
import { FilmCards } from "../universal/FilmCards";

export class GenresFilmCards extends FilmCards {
  #pastGenresId;

  constructor(element) {
    super(element);
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
    this.nextPage();
    super.setCardsOfFilms(fetchFilmsByGenres, {
      genreId: this.genresId,
      page: this.page,
    });
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
}
