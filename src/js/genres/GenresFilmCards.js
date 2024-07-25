import { fetchFilmsByGenres } from "../service/api";
import { FilmCards } from "../universal/FilmCards";
import { showMoreFilms } from "./setFilmsByGenres";

export class GenresFilmCards extends FilmCards {
  #pastGenresId;

  constructor(element) {
    super(element);
    this.fatherElement = element;
    this.btn;
    this.page = 1;
    this.genresId;
    this.isNoBtn = true;
  }

  async setCardsOnGenres(genresEl) {
    if (!this.isNoBtn) {
      this.#removeBtn();
    } else {
      this.isNoBtn = false;
    }

    this.setGenresId(genresEl);
    if (this.#isEqualGenres()) {
      return;
    }

    this.listCardsEl.innerHTML = "";
    this.resetPage();
    await this.setCardsOfFilms();
    this.#setBtn();
  }

  async setCardsOfFilms() {
    this.nextPage();
    if (this.page !== 1 || this.#checkNumbOfFilms()) {
      this.#disableBtn();
      this.#loadBtn();
    }
    await super.setCardsOfFilms(fetchFilmsByGenres, {
      genreId: this.genresId,
      page: this.page,
    });
    if (this.#checkNumbOfFilms()) {
      this.#removeBtn();
      this.isNoBtn = true;
    }
    if (this.page !== 1 && !this.#checkNumbOfFilms()) {
      this.#activeBtn();
      this.#unLoadBtn();
    }
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

  #setBtn() {
    const templateBtn = '<button class="genres__bth-more">More movies</button>';
    this.fatherElement.insertAdjacentHTML("beforeend", templateBtn);
    this.btn = document.querySelector(".genres__bth-more");
    this.#activeBtn();
  }
  #removeBtn() {
    this.btn.remove();
  }
  #disableBtn() {
    this.btn.removeEventListener("click", showMoreFilms);
  }
  #activeBtn() {
    this.btn.addEventListener("click", showMoreFilms);
  }
  #loadBtn() {
    this.btn.insertAdjacentHTML("beforeend", getLoader());
  }
  #unLoadBtn() {
    const loader = this.btn.querySelector(".loader");
    loader.remove();
  }

  #checkNumbOfFilms() {
    return this.page * 20 >= this.max_films;
  }
}

function getLoader() {
  return `<div class="loader"></div>`;
}
