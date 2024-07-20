import { fetchFilmsByGenres } from "../service/api";
import { createCardOfFilm } from "../universal/createCardOfFilm";
import { initAllRatings } from "../universal/initAllRatings";
import { getOriginalCard } from "../universal/templateCardFilm/getOriginalCard";

export class ListFilms {
  #pastGenresId;

  constructor(element) {
    this.page = 0;
    this.element = element;
    this.genresId;
  }

  async setCardsOnGenres(genresEl) {
    this.setGenresId(genresEl);
    if(this.#isEqualGenres()){
      return
    }
    this.element.innerHTML = "";
    this.resetPage();
    this.setCardsOfFilms();
  }

  async setCardsOfFilms(template) {
    this.nextPage();
    const cards = await this.#createSomeCards(template);
    this.element.insertAdjacentHTML("beforeend", cards.join(""));
    const ratingAllEls = this.element.querySelectorAll(".rating");
    initAllRatings(ratingAllEls);
  }

  setGenresId(genresEl) {
    const genreId = genresEl.dataset.genresId;
    this.#pastGenresId = this.genresId
    this.genresId = genreId;
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }

  #isEqualGenres(){
    return this.#pastGenresId === this.genresId
  }

  async #createSomeCards(templateCard = getOriginalCard) {
    const { genresId, page } = this;
    const infoOfFilms = await fetchFilmsByGenres(genresId, page);
    const cards = await Promise.all(
      infoOfFilms.map((item) => createCardOfFilm(item, templateCard))
    );
    return cards;
  }
}
