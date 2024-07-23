import { createCardOfFilm } from "./createCardOfFilm";
import { getOriginalCard } from "./templateCardFilm/getOriginalCard";

export async function createSomeCards(
  request,
  infoOfRequest,
  templateCard = getOriginalCard
) {
  const infoOfFilms = infoOfRequest
    ? await request(infoOfRequest)
    : await request();
  const cards = await Promise.all(
    infoOfFilms.map((item) => createCardOfFilm(item, templateCard))
  );
  return cards;
}
