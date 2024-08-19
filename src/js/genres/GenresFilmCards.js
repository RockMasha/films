import { fetchFilmsByGenres } from "../service/api";
import { createSomeCards } from "../universal/createSomeCards";
import { updateProgressBar } from "./btnUpSettings";
import { showMoreFilms } from "./setFilmsByGenres";

export class GenresFilmCards {
  constructor(element) {
    this.listCardsEl = element.querySelector(".cards-list");
    this.fatherElement = element;
    this.btn;
    this.genresId;
    this.page = 1;
    this.max_films;
    this.isNoBtn = true;
  }

  async setCardsOnGenres(id) {
    if (!this.isNoBtn && this.btn) {
      this.#removeBtn();
    } else {
      this.isNoBtn = false;
    }

    if (this.#isEqualGenres(id)) {
      return;
    }
    this.setGenresId(id);

    this.listCardsEl.innerHTML = "";
    this.resetPage();
    const answer = await this.setCardsOfFilms();

    if (answer !== "error") {
      this.#setBtn();
    }
  }

  async setCardsOfFilms() {
    this.nextPage();
    if (this.page !== 1 || this.#checkNumbOfFilms()) {
      this.#disableBtn();
      this.#loadBtn();
    }

    let answer;
    try {
      const infoOfCards = await createSomeCards(fetchFilmsByGenres, {
        genreId: this.genresId,
        page: this.page,
      });

      const { cards, maxFilms } = infoOfCards;
      this.#setCards(cards.join(""));
      this.#setMaxFilms(maxFilms);
    } catch (error) {
      answer = "error";
    }

    if (this.#checkNumbOfFilms()) {
      this.#removeBtn();
      this.isNoBtn = true;
    }
    
    if (this.page !== 1 && !this.#checkNumbOfFilms()) {
      this.#activeBtn();
      this.#unLoadBtn();
    }

    updateProgressBar();

    return answer === "error" ? answer : "ok";
  }

  setGenresId(id) {
    this.genresId = id;
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }

  #isEqualGenres(id) {
    return this.genresId === id;
  }

  #setCards(cards) {
    this.listCardsEl.insertAdjacentHTML("beforeend", cards);
  }

  #setMaxFilms(numb) {
    this.max_films = numb;
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
    const loader = this.btn.querySelector(".btnMoreLoader");
    loader.remove();
  }

  #checkNumbOfFilms() {
    return this.page * 20 >= this.max_films;
  }
}

function getLoader() {
  return `<div class="btnMoreLoader"></div>`;
}
