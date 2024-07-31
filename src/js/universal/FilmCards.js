import { createSomeCards } from "./createSomeCards";

export class FilmCards {
  constructor(element) {
    this.listCardsEl = element.querySelector(".cards-list");
    this.max_films;
  }

  async setCardsOfFilms(request, infoOfRequest, template) {
    const infoOfCards = await createSomeCards(request, infoOfRequest, template);
    this.listCardsEl.insertAdjacentHTML("beforeend", infoOfCards.cards.join(""));

    this.max_films = infoOfCards.maxFilms;
  }
}
