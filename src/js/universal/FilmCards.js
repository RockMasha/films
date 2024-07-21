import { createSomeCards } from "./createSomeCards";
import { initAllRatings } from "./initAllRatings";

export class FilmCards {
  constructor(element) {
    this.element = element;
  }

  async setCardsOfFilms(request, infoOfRequest, template) {
    const cards = await createSomeCards(request, infoOfRequest, template);
    this.element.insertAdjacentHTML("beforeend", cards.join(""));
    const ratingAllEls = this.element.querySelectorAll(".rating");
    initAllRatings(ratingAllEls);
  }
}
