import { createCardOfFilm } from "./createCardOfFilm";
import { getOriginalCard } from "./templateCardFilm/getOriginalCard";

export async function createSomeCards(
  request,
  infoOfRequest,
  templateCard = getOriginalCard
) {
  const requestAnswer = infoOfRequest
    ? await request(infoOfRequest)
    : await request();
  const { results: infoOfFilms, total_results: maxFilms } = requestAnswer;
  const cards = await Promise.all(
    infoOfFilms.map((item) => createCardOfFilm(item, templateCard))
  );
  return {cards, maxFilms};
}
