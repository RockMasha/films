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
    this.isFirstTime = true;
  }

  async setCardsOnGenres(genresEl) {
    if (!this.isFirstTime) {
      this.#removeBtn();
    } else {
      this.isFirstTime = false;
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
    if (this.page !== 0) {
      this.#disableBtn();
      this.#loadBtn()
    }
    this.nextPage();
    await super.setCardsOfFilms(fetchFilmsByGenres, {
      genreId: this.genresId,
      page: this.page,
    });
    if (this.page !== 1) {
      this.#activeBtn();
      this.#unLoadBtn()
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
  #loadBtn(){
    this.btn.insertAdjacentHTML("beforeend", getLoader())
  }
  #unLoadBtn(){
    const loader = this.btn.querySelector(".loader")
    loader.remove()
  }
}


function getLoader() {
  return `<div class="loader"></div>`;
}