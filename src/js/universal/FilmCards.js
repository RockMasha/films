import { createSomeCards } from "./createSomeCards";

export class FilmCards {
  constructor(element) {
    this.listCardsEl = element.querySelector(".cards-list");
  }

  async setCardsOfFilms(request, infoOfRequest, template) {
    const cards = await createSomeCards(request, infoOfRequest, template);
    this.listCardsEl.insertAdjacentHTML("beforeend", cards.join(""));
    const ratingAllEls = this.listCardsEl.querySelectorAll(".rating");
  }
}
